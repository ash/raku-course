---
title: The solution of ’Make a multiplier‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 You can find the source code in the file [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Output

```
14
21
```

## Comments

1. `multiplier(2)` returns a subroutine that remembers `$n` is `2`; `multiplier(3)` returns a separate subroutine that remembers `3`.

1. Each returned subroutine keeps its own `$n`, so `double(7)` gives `14` and `triple(7)` gives `21` — two independent functions built from the same factory.

{% include nav.html %}
