---
title: 'Solution: Een native array'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 Je kunt de broncode vinden in het bestand [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Uitvoer

```
555
```

## Opmerkingen

1. Door het native type `uint8` met vaste grootte voor de `@`-array te plaatsen, declareer je een array waarin elk element als een enkele unsigned byte wordt opgeslagen -- de compacte indeling die geschikt is voor binaire gegevens.

1. De wrap-around-limiet geldt voor elk *element* (`0..255`), niet voor het resultaat van het optellen ervan. `.sum` boxt het totaal naar een gewoon `Int`, dus `100 + 200 + 255` geeft de volledige `555`.

{% include nav.html %}
