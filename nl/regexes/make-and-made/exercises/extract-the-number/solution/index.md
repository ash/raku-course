---
title: 'Oplossing: Haal het getal eruit'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Je kunt de broncode vinden in het bestand [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. Het patroon matcht de cijfers en het letterlijke `kg`, maar het inline blok bewaart alleen `$<number>.Int` — het gehele getal, zonder de eenheid.

1. `made` leest die waarde terug: een echte `5`, klaar om mee te rekenen, in plaats van de tekst `5kg`. Dat is de typische taak van `make` — een match omzetten in de nette waarde die je werkelijk wilt.

{% include nav.html %}
