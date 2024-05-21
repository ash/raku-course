---
title: Getypte variabelen
---

{% include menu.html %}

In Raku kan een scalair variabele (of een scalair container) een enkel object van verschillende typen bevatten. Bijvoorbeeld, dezelfde variabele kan eerst een getal bevatten, en daarna een string:

```raku
my $var = 42;
$var = 'Hallo';
```

Hier is een ander voorbeeld van het mengen van verschillende datatypen in dezelfde expressie:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Dit is waarschijnlijk niet de beste programmeerpraktijk, maar het is een perfect geldig Raku-programma.

Niettemin, Raku stelt je in staat om te specificeren wat een gegeven variabele mag bevatten. Er zijn meer details in de onderstaande onderwerpen.

{% include nav.html %}