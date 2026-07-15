---
title: Tapping a supply
---

{% include menu.html %}

To subscribe to a supply, you _tap_ it: you give `.tap` a block, and that block runs for every value the supply emits. The simplest supply to experiment with is `Supply.from-list`, which emits the values of a list:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

This prints:

```
1
2
3
```

The block `-> $v { say $v }` is the _tap_. The supply pushes each value into it in turn, so the block runs three times, once per value.

The tap can do anything with the value, including accumulate a result:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Here every emitted value is added to `$total`, which ends at `6`. Tapping is the basic act of reactive programming: connect a piece of behaviour to a stream, and let the stream drive it.

{% include nav.html %}
