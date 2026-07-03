---
title: The solution of ’A two-argument Whatever‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 You can find the source code in the file [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Output

```
a-b
```

## Comments

1. The expression contains two stars, so Raku builds a `WhateverCode` that takes two arguments — the first star is the first argument, the second star is the second.

1. Calling `$join('a', 'b')` fills the stars in order, giving `'a' ~ '-' ~ 'b'`, which is `a-b`.

{% include nav.html %}
