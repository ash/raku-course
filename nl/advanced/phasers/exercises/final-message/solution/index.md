---
title: 'Solution: Laatste bericht'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Je kunt de broncode vinden in het bestand [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Uitvoer

```
processed 3 items
```

## Opmerkingen

1. De `END`-phaser is geschreven vóór de lus, maar wordt als laatste uitgevoerd — nadat de hoofdcode is afgelopen. Op dat moment is `$count` drie keer verhoogd.

1. Omdat de phaser een closure vormt over `$count`, leest hij de *uiteindelijke* waarde van de variabele, niet de `0` die deze had toen de phaser in de broncode verscheen. Dit is de gebruikelijke reden om een samenvatting in `END` te plaatsen.

{% include nav.html %}
