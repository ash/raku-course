---
title: 'Oplossing: Hoofdletterblinde match'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Je kunt de broncode vinden in het bestand [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Uitvoer

```
｢WORLD｣
```

## Opmerkingen

1. Het bijwoord `:i` laat de match het verschil tussen hoofdletters en kleine letters negeren.

1. Het patroon in kleine letters matcht daarom het `WORLD` in hoofdletters.

{% include nav.html %}
