---
title: Variabiles globales
---

{% include menu.html %}

Creemus variabilem ante clausulam codicis:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

In hoc casu, `$x` est variabilis globalis (in ambitu globali sita est), et programma `42` bis imprimit.

{% include nav.html %}