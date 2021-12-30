---
title: Comparing numbers
---

{% include menu.html %}

To compare two numbers, use the following operators. All of them are quite obvious if you are familiar with other programming languages.

`==` | Equal
`!=` | Not equal
`<` | Less than
`<=` | Less than or equal
`>` | Greater than
`>=` | Greater than or equal

## Approximately-equal

In addition to standard operators, Raku adds the approximately-equal operator `=~=`, which compares the numbers approximately. Its result is `True` if the two numbers are relatively close to each other. The maximum relative difference must not exceed the built-in value `$*TOLERANCE`, which is equal to `1e-15`.

## Unicode versions

Some of the above operators have their Unicode equivalents:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Examples

Some examples with the operators that compare numbers:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Note that the number `1.000000000000000000000001` is a `Rat` number, so you do not lose precision in an expression with a close number `1.000000000000000000000002`. The last example with `2e17` operates with `Num` numbers, which have restricted precision.

{% include nav.html %}
