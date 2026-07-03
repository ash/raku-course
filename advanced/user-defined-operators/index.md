---
title: User-defined operators
---

{% include menu.html %}

Operators in Raku are really just subroutines with special names. That means you can define your own, using the category names you met on the [Types of Raku operators](/advanced/operator-types) page: `prefix`, `infix`, `postfix`, and so on.

To declare an operator, write a `sub` whose name is the category, a colon, and the operator’s symbol in angle brackets. Here is a new infix operator called `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Once defined, `plus` is used between its two operands, exactly like any built-in infix operator.

A postfix operator follows its operand. The factorial is a classic example — here it is as the `!` postfix operator, built on [the reduction meta-operator](/advanced/metaoperators/reduction) you met earlier:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

You are not limited to letters and ASCII punctuation; an operator’s symbol can be any character. This prefix operator uses the section sign to double a number:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Defining operators is a powerful tool, so use it with taste: a well-chosen operator can make code read like the problem domain, while an obscure one only puzzles the next reader.

{% include nav.html %}
