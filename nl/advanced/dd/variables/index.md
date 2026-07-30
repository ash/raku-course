---
title: Variabelen dumpen
translations_gpt: Variabelen dumpen
---

{% include menu.html %}

Roep `dd` aan om te zien wat een variabele bevat, net zoals je zou doen met `say`:

```raku
my $var = 42;
dd $var;
```

Samen met de waarde toont `dd` ook de naam van de variabele:

```console
$var = 42
```

Als de variabele een gedeclareerd type heeft, verschijnt het type ook. Vergelijk de uitvoer van het volgende programma met het vorige:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Dit is het belangrijkste verschil met `say`: een enkele `dd`-aanroep op een scalar vertelt je de naam en, indien bekend, het type van de gegevens -- zodat je meerdere `dd`-aanroepen in een programma kunt plaatsen en toch kunt herkennen welke uitvoer bij welke variabele hoort.

Je kunt ook complexere datastructuren dumpen, zoals arrays of hashes. Hier toont `dd` een codeachtige weergave van de waarde:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Merk op dat de geneste array duidelijk zichtbaar blijft (er wordt echter geen variabelenaam getoond). Hetzelfde geldt voor hashes, waarvan `dd` de sleutels in gesorteerde volgorde toont:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
