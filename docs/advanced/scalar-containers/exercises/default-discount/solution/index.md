---
title: The solution of ’Default discount‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 You can find the source code in the file [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Of course, a simpler solution would be to directly initialise the variable with `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Output

```
0
15
```

## Comments

1. The `is default(0)` trait gives the container a value to fall back to while it has not been assigned anything. Reading the variable returns `0`, and, unlike an undeclared default, it produces no _uninitialized value_ warning.

1. After the assignment, the container holds `15`, and the default no longer plays any role.

{% include nav.html %}
