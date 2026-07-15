---
title: The solution of ’Sum a live feed‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $supplier = Supplier.new;

my $total = 0;
$supplier.Supply.tap(-> $v { $total += $v });

$supplier.emit(10);
$supplier.emit(20);
$supplier.emit(30);

say $total;
```

🦋 You can find the source code in the file [live-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/live-sum.raku).

## Output

```
60
```

## Comments

1. Each `.emit` delivers a value to the tap, which adds it to `$total`.

1. After the three emissions the total is `10 + 20 + 30`, that is `60`.

{% include nav.html %}
