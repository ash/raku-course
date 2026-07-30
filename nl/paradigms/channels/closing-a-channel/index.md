---
title: Een kanaal sluiten
translations_gpt:
---

{% include menu.html %}

Wanneer een producent geen waarden meer te versturen heeft, roept hij `.close` op het kanaal aan. Sluiten signaleert de consument dat de stroom geëindigd is.

De handigste manier om een gesloten kanaal te consumeren is `.list`, dat je elke resterende waarde geeft en klaar is zodra het kanaal gesloten is:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Omdat `.list` wacht tot het kanaal gesloten is, is het perfect voor "verzamel alles wat de producent verstuurt". Je kunt het resultaat als elke andere lijst behandelen — optellen, tellen, enzovoort:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Sluiten is hoe een consument weet wanneer hij moet stoppen. Zonder dat zou `.list` (of een lus van `.receive`) eeuwig wachten op een waarde die nooit komt. Sluit een kanaal altijd zodra het versturen klaar is.

{% include nav.html %}
