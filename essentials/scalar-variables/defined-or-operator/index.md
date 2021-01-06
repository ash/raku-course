---
title: The defined-or operator
---

{% include menu.html %}

The so-called _defined-or_ operator `//` helps to assign a value to a variable that is not yet set.

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

The value of `$a` is set in the first line, so in the expression `$a // 'gamma'`, the current value of `$a` is used. In contract, the `$b` variable was not initialised, so `$b // 'delta'` returns the right-hand-side operand, and the program prints `delta`.

## //=

The combination of `//` and `=` gives the `//=` operator that assignes a value if the variable is not defined.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}
