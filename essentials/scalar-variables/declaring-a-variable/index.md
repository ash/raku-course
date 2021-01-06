---
title: Scalar variables
---

{% include menu.html %}

Variables must be announced before you use them. Raku has special _declarators_ for this. To declare a variable, use `my` as shown below:

```raku
my $name;
```

Having that said, you introduced a new variable, which keeps no payload so far. But it is already known to the compiler to identify it when it sees the same name later in the program.

## More than one variable

You can declare two or more variables using the same `my` declarator:

```raku
my ($x, $y);
```

{% include nav.html %}
