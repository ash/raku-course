---
title: Rational numbers in Raku
---

{% include menu.html %}

Rational numbers are a unique feature of Raku. The `Rat` data type represents such numbers.

Internally, rational numbers are fractions with two integer parts: numerator and denominator. So, you can easily present numbers such as 1/3 without losing precision.

There are a few ways to write down a `Rat` number in a program in Raku:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Notice that the slash here is a part of the notation. It is not a division operator, so `1/2` does not mean that you divide 1 by 2. In printing, though, rationals are shown as decimal numbers or integers:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

The part of the line after the `#` symbol is a comment and is ignored by the compiler. Such comments will be used in the course to show the output of the program.

## Decimal form

It is important to realise that when you write the number in a decimal form, e.g., `0.5`, Raku creates a `Rat` number at that point. It is not an integer, but it is neither a floating-point number (`float` or `double` in other languages). It is still a rational number!

Consider the following example:

```raku
say 0.1 + 0.2 - 0.3;
```

If a programming language uses floating-point arithmetics for these calculations, the result will not be equal to 0. The website [0.30000000000000004.com](https://0.30000000000000004.com) gives an exhaustive list of examples where floating-point arithmethics does not give an expected result.

But Raku prints an exact `0`. This happens because it treats the numbers `0.1`, `0.2`, and `0.3` as rational numbers and keeps them as `1/10`, `2/10`, and `3/10` internally. Run it from the command line to confirm it:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Unicode forms

It is also possible to use Unicode characters that represent the fractions, such as `½` or `¼` or `¾`. Probably, it’s not always easy to type it with the keyboard, but these fractions are exactly the same values as their ASCII versions spelt as a fraction or as a decimal number:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

With some fractions, such as `1/3`, you have fewer options, `⅓` or `<1/3>`, as the decimal form would require an infinite number of digits.

{% include nav.html %}
