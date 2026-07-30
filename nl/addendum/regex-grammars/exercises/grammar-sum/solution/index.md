---
title: 'Oplossing: Een grammatica die optelt'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 Je kunt de broncode vinden in het bestand [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Uitvoer

```
12
```

## Opmerkingen

1. `<number>+ % '+'` matcht een of meer getallen gescheiden door plustekens — de modificator
`%` beschrijft het scheidingsteken tussen de herhalingen.

1. De actiemethode draait wanneer `TOP` matcht. `make` hangt er een berekende waarde aan — de
som van de getallen — die `.made` na het ontleden terugleest.

1. Een `token` slaat nooit spaties over, dus is deze grammatica streng over haar invoer:
`'3+4+5'` wordt ontleed, maar `'3 + 4 + 5'` niet (`.parse` geeft `Nil` terug). Om
spaties rond de plustekens te accepteren, maak je van `TOP` een `rule` — en maak je de kwantor
los van zijn atoom:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    In een `rule` staat witruimte in het patroon voor een impliciete aanroep van `<.ws>`.
Als `<number> + % '+'` geschreven, met een spatie vóór de kwantor `+`, dekt die
impliciete witruimte de hele herhaling — scheidingstekens inbegrepen — zodat zowel
`'3+4+5'` als `'3 + 4 + 5'` ontleed wordt, en de som in beide gevallen `12` is. (Als je
liever bij een `token` blijft, schrijf de spaties dan uit in het scheidingsteken:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
