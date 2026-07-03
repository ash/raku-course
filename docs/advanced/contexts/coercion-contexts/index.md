---
title: Numeric, string, and Boolean context
---

{% include menu.html %}

Three very common contexts ask a value to behave as a number, a string, or a Boolean value. Each has a prefix operator that forces it explicitly:

* `+` — numeric context
* `~` — string context
* `?` — Boolean context

Applied to an array, they give its length, its elements joined by spaces, and whether it has any elements:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

An empty array is `0` in numeric context and `False` in Boolean context:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

You don’t need to always write these operators by hand, because the language can impose the right context for you. Arithmetic puts its operands in numeric context, concatenation puts them in string context, and `if`, `while`, and `and`/`or` put their condition in Boolean context:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

So `if @array { … }` works exactly as you would hope: a non-empty array is true. The prefix operators are the explicit way to ask for the same coercions.

In a compination with a postfix `if`, this allows to create really expressive code:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
