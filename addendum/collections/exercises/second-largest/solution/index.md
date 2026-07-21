---
title: The solution of ’The second-largest value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 You can find the source code in the file [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Output

```
7
```

## Comments

1. Turning the list into a `Set` with `.Set` throws away the duplicate `9`, since a
set holds each value only once.

1. `.keys` gives the distinct values back — still `Int`s, not strings — so a plain
`.sort` orders them numerically. The second-largest is then one place before the
end, `[*-2]`.

{% include nav.html %}
