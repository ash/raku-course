---
title: 'Solution: Na elke stap'
translations_gpt: De oplossing van 'Na elke stap'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Je kunt de broncode vinden in het bestand [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Uitvoer

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Opmerkingen

1. De `NEXT`-phaser staat als eerste geschreven, maar wordt aan het *einde* van elke iteratie uitgevoerd -- nadat de body het huidige getal bij `$sum` heeft opgeteld.

1. Dus na de eerste doorgang is `$sum` `1`, na de tweede is het `3`, en na de derde is het `6`. `NEXT` is het lus-equivalent van iets uitvoeren tussen iteraties, onderscheiden van `FIRST` (eenmaal aan het begin) en `LAST` (eenmaal aan het einde).

{% include nav.html %}
