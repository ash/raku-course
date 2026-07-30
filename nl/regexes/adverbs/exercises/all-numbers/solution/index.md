---
title: 'Oplossing: Alle getallen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Je kunt de broncode vinden in het bestand [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Uitvoer

```
5+10+15
```

## Opmerkingen

1. `\d+` matcht een hele reeks cijfers, en `:g` verzamelt elke zulke reeks — hier `5`, `10` en `15`.

1. Elke match is een matchobject, dus `.map(*.Str)` maakt er kale strings van voordat ze met `+` aaneengeregen worden.

{% include nav.html %}
