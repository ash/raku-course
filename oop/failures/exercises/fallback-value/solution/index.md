---
title: The solution of ’A fallback value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 You can find the source code in the file [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Output

```
5
default
```

## Comments

1. `get(5)` returns `5` normally, so `//` keeps it.

1. `get(0)` returns an undefined `Failure`, so `//` falls back to `'default'`. Because a `Failure` is undefined, `//` handles it quietly, without throwing.

{% include nav.html %}
