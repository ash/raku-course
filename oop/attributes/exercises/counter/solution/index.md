---
title: The solution of ’A counter‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 You can find the source code in the file [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Output

```
0
5
```

## Comments

1. The attribute is declared `is rw` so that its accessor returns a writable container, and `= 0` gives it a starting value. The first `say` confirms a fresh counter really does begin at that default, `0`.

1. Because the accessor is writable, incrementing it with `++` works as expected.

{% include nav.html %}
