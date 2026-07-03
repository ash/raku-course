---
title: The solution of ’Wrapping around‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 You can find the source code in the file [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Output

```
4
255
```

## Comments

1. A `uint8` ranges from `0` to `255`, which is 256 distinct values. Arithmetic on it is effectively done modulo 256.

1. `250 + 10` would be `260`, which does not fit. It wraps around, landing `260 - 256 = 4` past the bottom. So overflow is not limited to stepping over the top by one — any result outside the range is folded back in.

1. Going the other way overflows too: decrementing `0` cannot give `-1` in an unsigned type, so it wraps to the maximum, `255`.

{% include nav.html %}
