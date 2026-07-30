---
title: 'Oplossing: Sorteer op twee sleutels'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Je kunt de broncode vinden in het bestand [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Uitvoer

```
Bob (25)
Anna (30)
Cara (30)
```

## Opmerkingen

1. Wanneer een `.sort`-blok een lijst teruggeeft, vergelijkt Raku op het eerste element, dan het
tweede — dus sorteert `{ .<age>, .<name> }` eerst op leeftijd en gebruikt het de naam alleen om
gelijke stand te breken.

1. Anna en Cara delen leeftijd `30`, dus worden ze alfabetisch geordend; Bob komt als jongste
eerst.

{% include nav.html %}
