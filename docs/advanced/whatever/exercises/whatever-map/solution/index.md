---
title: The solution of ’Whatever with map‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 You can find the source code in the file [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Output

```
(3 6 9 12)
```

## Comments

1. `* * 3` is a Whatever expression that becomes a one-argument `WhateverCode` — a perfectly ordinary function value stored in `$triple`.

1. Because it is just a function, `map` accepts it like any block, applying it to each element of `1..4` to give `(3 6 9 12)`.

{% include nav.html %}
