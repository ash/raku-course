---
title: Multi-functies
---

{% include menu.html %}

Raku implementeert _meervoudige dispatch_ op basis van functiesignatuur. Het stelt je in staat om functies te creëren die dezelfde naam delen maar verschillende soorten invoergegevens hebben. Gebruik de `multi` declarator voor elk van de varianten van de functie.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Het is prima om `sub` weg te laten na `multi`.)

Als je twee varianten van dezelfde functie hebt, voert de compiler meervoudige dispatch uit afhankelijk van welke argumenten hij ziet in de functieaanroep. Vergelijk de volgende twee aanroepen:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

De eerste aanroep activeert de functie met integer parameters, terwijl de tweede aanroep de tweede variant van de functie uitvoert die twee strings verwacht.

## Letterlijke parameters

Een interessant geval voor multi-functies is om varianten te hebben die letterlijke waarden als parameters hebben. Overweeg de volgende twee varianten:

```raku
multi sub f(42) {say 'Dit is het antwoord'}
multi sub f($x) {say "$x is niet het antwoord"}
```

De eerste variant wordt alleen uitgevoerd wanneer je de functie aanroept met de exacte waarde van 42. In andere gevallen wordt de tweede variant gebruikt. De volgorde waarin deze functies zijn gedefinieerd maakt niet uit.

```raku
f(10); # 10 is niet het antwoord
f(42); # Dit is het antwoord
```

{% include nav.html %}