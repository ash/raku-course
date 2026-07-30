---
title: 'Oplossing: De Tribonacci-reeks'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Je kunt de broncode vinden in het bestand [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Uitvoer

```
(1 1 1 3 5 9 17 31)
```

## Opmerkingen

1. De closure `* + * + *` telt de drie vorige elementen op om het volgende te maken, dus zijn er drie beginwaarden nodig.

1. De reeks is lui, dus haar in `@trib` bewaren en om `@trib[^8]` vragen berekent alleen de eerste acht getallen.

{% include nav.html %}
