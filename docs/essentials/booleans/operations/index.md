---
title: Boolean operations
---

{% include menu.html %}

You can do all standard operations with Boolean values: Boolean AND, OR, and exclusive OR (or XOR):

```raku
say False && True; # AND
say False || True; # OR
say False ^^ True; # XOR
```

This program prints the following results:

    False
    True
    True

## Negation

To negate a Boolean value, use the prefix operator `!`:

```raku
say !False; # True
```

Boolean values can be stored in scalar variables:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}
