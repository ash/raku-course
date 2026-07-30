---
title: 'Oplossing: Voer de grote getallen door'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Je kunt de broncode vinden in het bestand [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Uitvoer

```
[6 7 8 9 10]
```

## Opmerkingen

1. De feed stuurt `1..10` naar `grep`, die de getallen groter dan `5` houdt.

1. Het resultaat stroomt naar `@big`, het doel dat de feed afsluit.

{% include nav.html %}
