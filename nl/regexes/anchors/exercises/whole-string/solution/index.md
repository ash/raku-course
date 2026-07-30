---
title: 'Oplossing: De hele string'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Je kunt de broncode vinden in het bestand [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. De ankers `^` en `$` pinnen het patroon aan het begin en het einde van de string vast.

1. Daartussen moet `<[a..z]>+` elk teken verantwoorden, dus een string met een hoofdletter of een spatie, zoals `Hello there`, zou mislukken.

{% include nav.html %}
