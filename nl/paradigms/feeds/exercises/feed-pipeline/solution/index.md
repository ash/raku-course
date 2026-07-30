---
title: 'Oplossing: Een feed-pijplijn'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Je kunt de broncode vinden in het bestand [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Uitvoer

```
[8 10 12 14 16]
```

## Opmerkingen

1. De eerste fase houdt de getallen groter dan `3` (dat wil zeggen `4, 5, 6, 7, 8`); de tweede verdubbelt ze elk.

1. Elke `==>` geeft haar resultaat door aan de volgende fase, en de laatste verzamelt het in `@result`.

{% include nav.html %}
