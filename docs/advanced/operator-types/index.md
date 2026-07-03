---
title: Types of Raku operators
---

{% include menu.html %}

You have already used many operators — `+`, `~`, `++`, and so on. In Raku, operators are classified by _where_ they sit relative to their operands. Knowing the categories helps later, when you define operators of your own.

## `prefix`

A prefix operator comes _before_ a single operand:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Here, `-` negates the number and `?` turns a value into its Boolean.

## `infix`

An infix operator sits _between_ two operands. Most of the familiar arithmetic and string operators are infix:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

An infix operator is not always a punctuation symbol — it can be a word. The `gcd` operator you met with [integers](/advanced/integers), for example, is an infix operator written as a name between its two operands:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

A postfix operator comes _after_ a single operand:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` and `postcircumfix`

A circumfix operator _surrounds_ its operand. The square brackets that build an array are a circumfix operator:

```raku
my @a = [1, 2, 3];
```

A postcircumfix operator surrounds something but follows a term. Subscripting is a postcircumfix operator — the `[1]` after `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

These names — `prefix`, `infix`, `postfix`, `circumfix`, and `postcircumfix` — are the same words Raku uses when you [declare a new operator](/advanced/user-defined-operators), as you will see later.

{% include nav.html %}
