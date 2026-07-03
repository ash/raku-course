---
title: Integer methods
---

{% include menu.html %}

Integers come with a number of useful methods and routines. Here are a few that you will reach for often.

The `is-prime` method tells whether a number is a prime:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

The `gcd` and `lcm` operators return the greatest common divisor and the least common multiple of two numbers:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

The `abs` method returns the absolute value, and `sign` returns `-1`, `0`, or `1` depending on whether the number is negative, zero, or positive:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
