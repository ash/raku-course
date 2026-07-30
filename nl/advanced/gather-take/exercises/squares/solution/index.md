---
title: 'Solution: Kwadraten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Je kunt de broncode vinden in het bestand [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Uitvoer

```
[4 16 36]
```

## Opmerkingen

1. De `if $_ %% 2`-voorwaarde bepaalt *of* er genomen wordt, en `$_ ** 2` bepaalt *wat* er genomen wordt. Alleen de even getallen `2`, `4`, `6` voldoen aan de voorwaarde.

1. Hun kwadraten `4`, `16`, `36` zijn de enige waarden die aan `take` worden doorgegeven, dus `gather` verzamelt precies die waarden. Het filteren en transformeren samen in een enkele `take` is iets wat een gewone `map` niet zo overzichtelijk kan uitdrukken.

{% include nav.html %}
