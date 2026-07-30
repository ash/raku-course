---
title: 'Oplossing: Een rule met spaties'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Je kunt de broncode vinden in het bestand [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Omdat `TOP` een `rule` is, eist elke spatie die tussen de `<word>`-aanroepen geschreven staat witruimte in de invoer.

1. De string `'the quick fox'` heeft spaties tussen alle drie de woorden, dus wordt ze ontleed. Met een `token` voor `TOP` zouden de spaties in het patroon genegeerd worden en zou het ontleden mislukken.

{% include nav.html %}
