---
title: Lokālie mainīgie
---

{% include menu.html %}

Kas notiek, ja deklarējat mainīgo ne tikai globālajā apjomā, bet arī lokāli blokā?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

Programmai tagad ir divi neatkarīgi mainīgie. Tiem ir kopīgs nosaukums, bet visas atsauces uz `$x` globālajā apjomā attiecas uz globālo mainīgo, savukārt `$x` blokā ir lokāls mainīgais, kas atšķiras no globālā `$x`. Programma izdrukā divas dažādas vērtības:

```console
$ raku t.raku
42
1
```

{% include nav.html %}