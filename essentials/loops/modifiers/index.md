---
title: while and until as statement modifiers
---

{% include menu.html %}

Both `while` and `until` can be used in the form of statement modifiers ([similarly](/essentials/conditional-checks/modifiers) to `if` and `unless`).

Consider an example that emulates modulo division:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Here, `-=` is the operator that combines both subtraction and assignment. In this case, `$x -= 3` is equivalent to `$x = $x - 3`.

The `while` modifier lets the statement `$x -= 3` to repeat while the condition `$x > 2` remains `True`. As soon as it becomes `False`, the loop stops. 

Notice that if the condition is `False` initially, the statement is not executed at all.

The same program can be rewritten with `until`. For this, the condition must be inverted:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}
