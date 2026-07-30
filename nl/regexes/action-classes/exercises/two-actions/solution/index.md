---
title: 'Oplossing: Eén grammatica, twee acties'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Je kunt de broncode vinden in het bestand [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Uitvoer

```
30
-10
```

## Opmerkingen

1. De grammatica beschrijft alleen de vorm `getal,getal`; ze weet niets over wat er berekend moet worden.

1. De twee actieklassen hangen verschillende betekenissen aan dezelfde parse — de ene telt de getallen op, de andere trekt ze af. Een ander `actions`-object aan `.parse` meegeven is alles wat nodig is voor een ander resultaat, zonder de grammatica ook maar aan te raken.

{% include nav.html %}
