---
title: 'Oplossing: De op een na grootste waarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Je kunt de broncode vinden in het bestand [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Uitvoer

```
7
```

## Opmerkingen

1. De lijst met `.Set` in een `Set` veranderen gooit de dubbele `9` weg, aangezien een
verzameling elke waarde slechts één keer bevat.

1. `.keys` geeft de verschillende waarden terug — nog steeds `Int`s, geen strings — dus zet een gewone
`.sort` ze numeriek op volgorde. De op een na grootste staat dan één plek voor het
einde, `[*-2]`.

{% include nav.html %}
