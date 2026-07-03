---
title: The solution of ’Prime or not‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 You can find the source code in the file [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Output

```
True
False
```

## Comments

1. `97` has no divisors other than `1` and itself, so `is-prime` returns `True`.

1. `91` looks prime but is `7 × 13`, so `is-prime` returns `False`. The method does the factoring for you, which is the whole point of having it.

{% include nav.html %}
