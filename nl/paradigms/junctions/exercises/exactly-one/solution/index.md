---
title: 'Oplossing: Precies één'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say so one(1, 2, 3) == 2;
```

🦋 Je kunt de broncode vinden in het bestand [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Een `one`-junctie is alleen waar wanneer **precies één** waarde op de vergelijking matcht.

1. Precies één van `1, 2, 3` is gelijk aan `2`, dus is het resultaat `True`. Als er twee matchten (of geen enkele), zou het `False` zijn. De `so` klapt de junctie tot een simpele boolean in.

{% include nav.html %}
