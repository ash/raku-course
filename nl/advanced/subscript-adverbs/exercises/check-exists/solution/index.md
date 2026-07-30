---
title: 'Solution: Bestaat de sleutel'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Je kunt de broncode vinden in het bestand [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Uitvoer

```
False
```

## Opmerkingen

1. Het adverb `:exists` geeft terug of de sleutel aanwezig is, zonder de waarde op te halen.

1. De hash heeft geen sleutel `z`, dus het geeft `False` terug — en, in tegenstelling tot een gewone opzoeking, wordt de sleutel niet als neveneffect aangemaakt.

{% include nav.html %}
