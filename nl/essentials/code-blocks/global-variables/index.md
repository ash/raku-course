---
title: Globale variabelen
---

{% include menu.html %}

Laten we een variabele maken vóór het codeblok:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

In dit geval is `$x` een globale variabele (het bevindt zich in de globale scope), en het programma print tweemaal `42`.

{% include nav.html %}