---
title: Lokale variabelen
---

{% include menu.html %}

Wat als je een variabele niet alleen in de globale scope, maar ook lokaal in het blok declareert?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

Het programma heeft nu twee onafhankelijke variabelen. Ze delen de naam, maar alle verwijzingen naar `$x` in de globale scope hebben betrekking op de globale variabele, terwijl de `$x` binnen het blok een lokale variabele is, verschillend van de globale `$x`. Het programma print twee verschillende waarden:

```console
$ raku t.raku
42
1
```

{% include nav.html %}