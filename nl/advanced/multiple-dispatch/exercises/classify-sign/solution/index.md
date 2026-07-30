---
title: 'Solution: De grootte classificeren'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Je kunt de broncode vinden in het bestand [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Uitvoer

```
small
medium
large
```

## Opmerkingen

1. Alle drie de kandidaten nemen een enkele `Int` aan, dus zonder de `where`-clausules zouden ze botsen. De voorwaarden op de eerste twee maken ze onderscheidend, en de derde is het vangnet.

1. De `where`-clausules testen `$n.abs`, dus alleen de grootte bepaalt het resultaat en het teken wordt genegeerd. `size(7)` komt overeen met de eerste kandidaat (`small`), terwijl `size(-250)` een absolute waarde van `250` heeft, die niet aan beide voorwaarden voldoet en doorvalt naar het vangnet (`large`).

1. De kandidaten worden getest van de meest specifieke naar de meest algemene — precies de volgorde waarin ze hier geschreven zijn.

{% include nav.html %}
