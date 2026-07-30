---
title: 'Solution: Begin eerst'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Je kunt de broncode vinden in het bestand [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. `BEGIN { 2 + 3 }` wordt tijdens de compilatie uitgevoerd en levert `5` op. Gebruikt als expressie geeft een `BEGIN`-blok zijn waarde terug, die wordt toegewezen aan `$compiled`.

1. De berekening vindt slechts eenmaal plaats, tijdens de compilatie; tegen de tijd dat het programma draait, bevat `$compiled` simpelweg de constante `5`. Dit is hoe `BEGIN` wordt gebruikt om waarden vooraf te berekenen, niet alleen om iets vroeg af te drukken.

{% include nav.html %}
