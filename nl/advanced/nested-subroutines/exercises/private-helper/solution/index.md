---
title: 'Solution: Een privéhulpfunctie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 Je kunt de broncode vinden in het bestand [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Uitvoer

```
16
```

## Opmerkingen

1. De hulpfunctie `double` is gedefinieerd binnen `stats`, dus is alleen daar zichtbaar en kan niet van elders in het programma worden aangeroepen.

1. `stats` gebruikt haar twee keer: `double(3)` is `6` en `double(5)` is `10`, en hun som is `16`.

{% include nav.html %}
