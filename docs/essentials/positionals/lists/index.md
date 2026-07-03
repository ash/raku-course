---
title: Lists
---

{% include menu.html %}

Lists are similar to arrays but are immutable. It is not possible to change the size or the elements of a list. Use parentheses to create a list:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Subscripting lists

To access individual elements of a list, use square brackets with the index:

```raku
say $odd[3]; # 7
```

Although, it is not possible to set a new value:

```raku
$odd[3] = 8; # Not OK
```

Such an attempt causes an exception:

    Cannot modify an immutable List ((1 3 5 7 9))
      in block <unit> at t.raku line 4

## Assigning a list to an array

What happens when you save a list in a variable with the `@` sigil?

```raku
my @data = (40, 42, 44);
```

In this case, the `@data` variable contains an array, and you can modify its elements.

%%tipblock
## Variable vs list

Note that the fact that lists are immutable does not mean you cannot reuse the variable that keeps it.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}
