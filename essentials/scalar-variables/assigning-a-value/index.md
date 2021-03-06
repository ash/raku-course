---
title: Assigning a value
---

{% include menu.html %}

Use the `=` operator to put a new value into a scalar container.

```raku
my $name;
$name = 'Anna';
```

You can now use the variable and, for example, print it:

```raku
say $name;
```

## Multiple assignments

Multiple variables can be assigned at once. For example, this is how to assign two scalars in a single statement:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Notice that you cannot omit the parentheses on the left-hand side. But you can add them for symmetry on the right side:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}
