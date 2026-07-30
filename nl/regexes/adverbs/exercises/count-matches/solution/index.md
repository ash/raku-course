---
title: 'Oplossing: Tel de matches'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Je kunt de broncode vinden in het bestand [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. De tekenklasse `<[aeiou]>` matcht één klinker, en het bijwoord `:g` geeft elke zulke match terug in plaats van alleen de eerste.

1. Het resultaat gedraagt zich als een lijst, dus `.elems` telt de matches: de vijf klinkers in `education` (e, u, a, i, o).

{% include nav.html %}
