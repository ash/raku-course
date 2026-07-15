---
title: The solution of ’Tuning in late‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $supplier = Supplier.new;

my @got;
$supplier.emit(1);
$supplier.Supply.tap(-> $v { @got.push($v) });
$supplier.emit(2);
$supplier.emit(3);

say @got;
```

🦋 You can find the source code in the file [a-live-feed.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/a-live-feed.raku).

## Output

```
[2 3]
```

## Comments

1. The `Supplier` is the sending end; its `.Supply` is what you tap. A live supply broadcasts only to the taps listening **at the moment** of each emission.

1. The `emit(1)` happens before any tap exists, so it is lost — like tuning into a radio station after a song has played. Only `2` and `3`, emitted after the tap, are captured, giving `[2 3]`.

{% include nav.html %}
