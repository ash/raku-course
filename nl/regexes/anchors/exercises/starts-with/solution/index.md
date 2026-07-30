---
title: 'Oplossing: Begint met'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Je kunt de broncode vinden in het bestand [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Het anker `^` dwingt de match bij het begin van de string te beginnen, en `\d` eist daarna dat dat eerste teken een cijfer is.

1. Zonder de `^` zou het patroon ook slagen voor een cijfer dat ergens later in de string voorkomt, zoals in `'apples 3'`.

{% include nav.html %}
