---
title: The solution of ’Greatest common divisor and least common multiple‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 You can find the source code in the file [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Output

```
gcd = 12
lcm = 72
```

## Comments

1. `gcd` is a built-in infix operator, so `$a gcd $b` gives the greatest common
divisor directly.

1. The least common multiple is the product of the two numbers divided by their
gcd — computed inside the interpolation `{ ... }` with integer division `div`.

{% include nav.html %}
