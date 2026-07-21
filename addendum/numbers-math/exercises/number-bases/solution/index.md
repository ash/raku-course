---
title: The solution of ’One number, three bases‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 You can find the source code in the file [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Output

```
11111111
377
FF
```

## Comments

1. The `.base` method renders an integer in any base from 2 to 36, returning a
string. `255` is `11111111` in binary and `FF` in hexadecimal — the largest
value that fits in one byte.

{% include nav.html %}
