---
title: Reduction metaoperators
---

{% include menu.html %}

A reduction meta-operator is written as a regular operator wrapped in square brackets, such as `[+]` or `[*]`. It takes a list of values and inserts the operator between every pair of them, reducing the whole list to a single value.

For example, `[+]` adds up all the elements of a list:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

The construct `[+] @data` is equivalent to writing the operator out by hand:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Any suitable infix operator works the same way. With `[*]` you get the product of the list, so applying it to the range `1..$n` is a handy way to compute a factorial:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Here, the range `1..$n` produces the numbers from 1 to 5, and `[*]` multiplies them: `1 * 2 * 3 * 4 * 5`, which is _5!_.

String concatenation works too. The `[~]` reduction joins a list of strings into one:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Even comparison operators can be reduced. `[<]` reports whether the values are in strictly increasing order:

```raku
say [<] 1, 2, 3; # True
```

## Triangular reduction

If you put a backslash inside the brackets, you get a _triangular_ reduction, which keeps all the intermediate results instead of only the final one:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Each element of the result is a partial sum: `1`, then `1+2`, then `1+2+3`, and so on up to the sum of the whole list.

{% include nav.html %}
