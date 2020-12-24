---
title: Boolean operations
---

{% include menu.html %}

All standard operations are defined for Boolean values: Booleand AND, OR, and exclusive OR or XOR:

    say False && True; # AND
    say False || True; # OR
    say False ^^ True; # XOR

This program prints the following results:

    False
    True
    True

To negate a Boolan value, use the prefix operator `!`:

    say !False; # True

Boolean values can be stored in scalar variables:

    my $did = True;
    my $didn't = !$did;

{% include nav.html %}
