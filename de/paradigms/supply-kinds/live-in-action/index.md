---
title: Live-Supplies in Aktion
translations_gpt:
---

{% include menu.html %}

Da ein Live-Supply an die gerade zuhörenden Zapfstellen sendet, können mehrere Zuhörer demselben Strom zugleich folgen — und jeder darf beliebig ein- oder aussteigen. Hier beobachten zwei Zuhörer einen Strom von Ereignissen: ein `log`, das alles festhält, und ein `alert`, das später einsteigt und früher geht.

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

Das gibt aus:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

Der Lebenslauf der beiden Zapfstellen sieht so aus — 🟢 kennzeichnet einen Einstieg, 🔴 einen Ausstieg und ✅ jeden Wert, den eine Zapfstelle tatsächlich erhält:

| Schritt | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 steigt ein  |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 steigt ein  |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 geht        |                |
| `emit 'stop'`           |                | ✅ stop        |

Eine leere Zelle bedeutet, dass diese Zapfstelle nicht zuhörte, als der Wert hinausging. Folgen Sie dem Zeitverlauf:

* `.tap` liefert ein **`Tap`-Objekt** — den Griff, den Sie behalten, um genau dieses Abonnement zu steuern.
* `start` wird ausgesandt, während nur `log` zuhört, nur `log` sieht es also. Das ist wieder die Regel des Live-Supply: `alert` stieg *nach* `start` ein, und ein Live-Supply spielt die Vergangenheit nicht erneut ab, `alert` sieht es also nie.
* `warning` und `all clear` werden ausgesandt, während **beide** angezapft haben, jeder Wert erreicht also beide — in der Reihenfolge, in der die Zapfstellen abonniert haben, erst `log`, dann `alert`.
* `$log.close` aufzurufen **verlässt** das Supply. Von da an erhält `log` nichts mehr, das abschließende `stop` erreicht also nur `alert`.

Zweierlei bleibt festzuhalten. Erstens kann ein einzelnes Live-Supply zugleich an viele unabhängige Zapfstellen ausfächern. Zweitens ist jede Zapfstelle ein eigenes Abonnement mit eigener Lebensdauer: Halten Sie das `Tap`-Objekt fest, das `.tap` liefert, und Sie können diesen einen Zuhörer mit `.close` beenden, ohne die anderen zu stören.

{% include nav.html %}
