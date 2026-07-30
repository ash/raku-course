---
title: Reeksen
translations_gpt:
---

{% include menu.html %}

Een _reeks_ (sequence) is een geordende serie waarden die na elkaar worden geproduceerd. Raku bouwt reeksen met de `...`-operator, die het patroon uit de opgegeven waarden afleidt en de rest genereert tot aan een eindpunt.

Het eenvoudigste geval telt van de ene waarde tot de andere:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Als je twee startwaarden opgeeft, neemt Raku de stap ertussen en gaat door met dezelfde stap. Zo maak je een rekenkundige reeks:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Hier stellen de startwaarden `1, 3` de stap in op twee, zodat Raku in stappen van twee optelt en stopt zodra het `11` bereikt.

De waarde die door `...` wordt geproduceerd, is van het type `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

De volgende onderwerpen laten andere patronen zien die de `...`-operator kan herkennen, en hoe een reeks lui (lazy) kan zijn — zelfs oneindig.

{% include nav.html %}
