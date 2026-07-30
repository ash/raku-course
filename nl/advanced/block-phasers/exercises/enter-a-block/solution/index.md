---
title: 'Solution: Een blok betreden'
translations_gpt: De oplossing van 'Een blok betreden'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Je kunt de broncode vinden in het bestand [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Uitvoer

```
--entering
body 1
--entering
body 2
```

## Opmerkingen

1. `ENTER` wordt elke keer uitgevoerd wanneer het blok wordt betreden, net voor de body. Omdat de lus bij elke iteratie het blok opnieuw betreedt, wordt `--entering` voor elke `body`-regel afgedrukt.

1. Dit is het verschil tussen `ENTER` en `FIRST`: `FIRST` zou slechts eenmaal voor de hele lus worden uitgevoerd, terwijl `ENTER` bij elke betreding wordt uitgevoerd.

{% include nav.html %}
