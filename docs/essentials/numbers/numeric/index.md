---
title: Scientific notation in Raku
---

{% include menu.html %}

In the previous section, we saw that numbers such as `1.5` are [rational numbers](/essentials/numbers/rats). To make a number that corresponds to a `double` number in C++, use scientific notation:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

In this case, Raku creates instances of the `Num` data type and stores the data as an IEEE number internally.

## Built-in constants

There are a few constants listed below that you can use straight ahead. They are the numbers of the `Num` type. Both ASCII and Unicode variants are available:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | equals to `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}
