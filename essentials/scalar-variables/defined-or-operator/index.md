---
title: The defined-or operator
---

{% include menu.html %}

Use the so-called _defined-or_ operator `//` to get a fallback value if a variable is not yet set.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

This program prints:

```
alpha
delta
```

The value of `$a` is set in the first line, so in the expression `$a // 'gamma'`, the current value of `$a` is used. In contrast, the `$b` variable was not initialised, so `$b // 'delta'` returns the right-hand-side operand, and the program prints `delta`.

## //=

The combination of `//` and `=` gives the `//=` operator that assigns a value if the variable is not defined.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}
