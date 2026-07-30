---
title: Een blok betreden
translations_gpt: Oefening 'Een blok betreden'
---

{% include menu.html %}

## Probleem

In tegenstelling tot `FIRST`, dat slechts eenmaal wordt uitgevoerd, wordt een `ENTER`-phaser *elke keer* uitgevoerd wanneer het blok wordt betreden -- en een lusblok wordt bij elke iteratie opnieuw betreden.

Doorloop `1..2` met een lus. Plaats binnen de lus een `ENTER`-phaser die `--entering` afdrukt, en een gewone instructie die `body` met het huidige nummer afdrukt. Merk op dat `--entering` eenmaal per iteratie verschijnt.

## Voorbeeld

Het programma drukt af:

```
--entering
body 1
--entering
body 2
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
