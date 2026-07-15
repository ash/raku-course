---
title: Live supplies in action
---

{% include menu.html %}

Because a live supply broadcasts to whatever taps are listening at the moment, several listeners can follow the same stream at once — and each is free to join or leave whenever it likes. Here two listeners watch a stream of events: a `log` that records everything, and an `alert` that joins later and leaves earlier.

```raku
my $supplier = Supplier.new;
my $events   = $supplier.Supply;

my $log = $events.tap(-> $v { say "log:   $v" });    # first listener joins
$supplier.emit('start');

my $alert = $events.tap(-> $v { say "alert: $v" });  # a second listener joins
$supplier.emit('warning');
$supplier.emit('all clear');

$log.close;                                          # the first listener leaves
$supplier.emit('stop');
```

This prints:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

The lifecycle of the two taps lines up like this — 🟢 marks a tap joining, 🔴 a tap leaving, and ✅ each value a tap actually receives:

| Step | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 joins       |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 joins       |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 leaves      |                |
| `emit 'stop'`           |                | ✅ stop        |

A blank cell means that tap was not listening when the value went out. Follow the timeline:

* `.tap` returns a **`Tap` object** — the handle you keep to control that one subscription.
* `start` is emitted while only `log` is listening, so only `log` sees it. This is the live-supply rule again: `alert` joined *after* `start`, and a live supply does not replay the past, so `alert` never sees it.
* `warning` and `all clear` are emitted while **both** are tapped, so each value reaches both — in the order the taps subscribed, `log` first, then `alert`.
* Calling `$log.close` **leaves** the supply. From then on `log` receives nothing, so the final `stop` reaches only `alert`.

Two things to take away. First, a single live supply can fan out to many independent taps at once. Second, each tap is its own subscription with its own lifetime: hold on to the `Tap` object that `.tap` returns, and you can end that one listener with `.close` without disturbing the others.

{% include nav.html %}
