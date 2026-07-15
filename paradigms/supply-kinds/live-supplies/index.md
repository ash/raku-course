---
title: Live supplies
---

{% include menu.html %}

A _live_ supply broadcasts values as they occur to whatever taps are listening **at that moment**. You create one with a `Supplier`: the supplier is the sending end, and its `.Supply` is the receiving end that others tap.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Here `.emit` pushes a value into the live supply, and every current tap receives it. The tap was in place before the emissions, so it captured both values.

The crucial difference from an on-demand supply is timing: a live supply does **not** remember past values. A tap added after an `emit` would miss whatever was emitted before it subscribed. Live supplies are the right model for real events — clicks, messages, sensor readings — where “what is happening now” matters and the past is gone.

In short: use an on-demand supply to replay a fixed sequence to each subscriber, and a live supply (via a `Supplier`) to broadcast events as they happen.

{% include nav.html %}
