---
title: Operations with numbers
---

{% include menu.html %}

There is no doubt you already know some of the operations that you can do with numbers in Raku. Just to mention that the symbol of the _operation_ is called _operator_. The objects on which we perform operations are called _operands_.

## Arithmetics

**Operator** | **Operation**
`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division

As Raku [supports Unicode](/raku-course/essentials/on-unicode) really well, some of these operators have non-ASCII equivalents:

`×` | Multiplication
`÷` | Division

To change the order of execution, use parentheses:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulo

The modulo operator is `%` as in many other languages.

`%` | Modulo

It returns the remainder of integer division of two numbers, so `10 % 3` is `1`. Note that `-10 % 3` is `2` as the result of the operation is defined as the difference between the first number and the rounded-down division multiplied by the second number. So, `$a % $b` is equivalent to `$a - $b * floor($a / $b)`.

## Integer operations

There are special operations that return integer results. Their operators are words instead of symbols.

`div` | Integer division
`mod` | Integer modulo

The `div` operator rounds down the result, so `10 div 3` is `3`, and `-10 div 3` is `-4`.

Both `div` and `mod` expect integer operands. So, the following program will not work if you uncomment the lines maked as `Error`:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Error

say 10.3 / 3.3;     # OK
# say 10.3 mod 3.3; # Error
```

## Power

There are two ways of geting the result of _x_ to the power of _y_. First, you can use the `**` operator:

```raku
say 3 ** 4; # 81
```

Second, you can use superscript digits, for example:

```raku
say 3⁴; # 81
```

It is possible to have more than one superscript digit to get the value of power, which is bigger than 9, for example:

```raku
say 2¹⁵; # 32768
```

A negative power is not a problem either:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Notice that the result of the last two expressions is a `Rat` number.

## Operations with assignmnets

All the operations support the shortcut syntax when you need to update the same variable. Let us demonstrate it on the example of `+`:

```raku
$a = $a + $b;

# is equivalent to:

$a += $b;
```

{% include nav.html %}
