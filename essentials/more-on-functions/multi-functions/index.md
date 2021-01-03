---
title: Multi-functions
---

{% include menu.html %}

Raku offers multiple dispatch based on function’s signature. It allows to create more than one function that share the name but has different types of their input data. Use the `multi` declarator for each of the variants of the function.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(It is fine to omit `sub` if there is `multi`.)

Having the two variants of the same functions, the compiler will perform multiple dispatch depending on which arguments it sees in the function call. Compare the following two calls:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

The first call triggers the function with integer parameters, while the second call runs the second variant of the funciton that expects two strings.

## Literal parameters

An interesting case for multi-functions is to have variants that hav literal values as parameters. Consider the following two variants:

```raku
multi sub f(42) {say 'This is the answer'}
multi sub f($x) {say "$x is not the answer"}
```

The first variant is only run when you call the function with the exact value of 42. In other cases, the second variant is used. The order in which these functions are defined does not matter.

```raku
f(10); # 10 is not the answer
f(42); # This is the answer
```

{% include nav.html %}
