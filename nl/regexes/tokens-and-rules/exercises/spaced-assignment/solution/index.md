---
title: 'Oplossing: Een toekenning met spaties'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Je kunt de broncode vinden in het bestand [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Omdat `TOP` een `rule` is, staan de spaties in het patroon witruimte om de `=` in de invoer toe.

1. Dus `'x = 5'` wordt ontleed. Met een `token` voor `TOP` zou alleen `'x=5'` matchen.

De witruimte die een `rule` toestaat is **optioneel**, niet verplicht: de betekenisvolle spatie matcht net zo graag *nul* spaties als één, dus wordt de vorm zonder spaties ook ontleed:

```raku
say Assign.parse('x=5').defined; # True
```

De `rule` aanvaardt dus `'x = 5'`, `'x=5'` en zelfs `'x =5'` allemaal — flexibiliteit zonder uit te spellen waar wel of geen spatie mag staan.

{% include nav.html %}
