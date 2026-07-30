---
title: 'Oplossing: Ontleed een volledige naam'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Je kunt de broncode vinden in het bestand [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Uitvoer

```
｢Hopper｣
```

## Opmerkingen

1. `TOP` beschrijft de hele naam; `first` en `last` beschrijven de delen, met een letterlijke spatie ertussen.

1. Na het ontleden is elk token een benoemde capture, dus wordt de achternaam als `<last>` van het matchobject gelezen.

{% include nav.html %}
