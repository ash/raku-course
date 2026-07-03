---
title: Review of operator behaviour
---

{% include menu.html %}

When an expression contains several operators, Raku has to decide in what order to apply them. Two rules govern this: _precedence_ and _associativity_.

## Precedence

Precedence decides which operator binds more tightly. Multiplication has higher precedence than addition, so it happens first:

```raku
say 2 + 3 * 4; # 14
```

The expression is read as `2 + (3 * 4)`, giving `14` rather than `20`. You can always use parentheses to force a different order:

```raku
say (2 + 3) * 4; # 20
```

## Associativity

Associativity decides the order between operators of the _same_ precedence. Subtraction is left-associative, so it groups from the left:

```raku
say 8 - 3 - 2; # 3
```

This is `(8 - 3) - 2`, which is `3`. Exponentiation, on the other hand, is right-associative:

```raku
say 2 ** 3 ** 2; # 512
```

Here the expression groups as `2 ** (3 ** 2)`, that is `2 ** 9`, which is `512`.

## Chained comparisons

Comparison operators can be _chained_, which reads naturally and does what you expect from mathematics:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

The middle value is compared with both neighbours: `1 < 2 < 3` is true because `1 < 2` and `2 < 3` are both true.

{% include nav.html %}
