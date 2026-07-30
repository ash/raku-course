---
title: 'Oplossing: Beschrijf op type'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Je kunt de broncode vinden in het bestand [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Uitvoer

```
integer 42
string hi
list of 3
```

## Opmerkingen

1. Elke `multi` geeft één versie van `describe` met een ander parametertype.
Raku kiest de passende kandidaat op grond van het type van het argument.

1. De signatuur `@x` matcht een lijst, dus verwijst de array naar de derde
kandidaat, die haar lengte meldt.

{% include nav.html %}
