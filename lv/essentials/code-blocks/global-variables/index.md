---
title: Globālie mainīgie
---

{% include menu.html %}

Izveidosim mainīgo pirms koda bloka:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

Šajā gadījumā `$x` ir globāls mainīgais (tas atrodas globālajā darbības jomā), un programma izdrukā `42` divas reizes.

{% include nav.html %}