---
title: 'Oplossing: Verwijder een bestand'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Je kunt de broncode vinden in het bestand [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Uitvoer

```
True
False
```

## Opmerkingen

1. `spurt` maakt het bestand aan, dus de eerste `.e`-test meldt `True`.

1. `unlink` verwijdert het. De tweede `.e`-test meldt daarna `False`, omdat het bestand weg is. Let op het gebruik van `.e` in plaats van `.f`: de typetest `.f` zou werpen op een pad dat niet meer bestaat, terwijl `.e` eenvoudigweg `False` antwoordt.

{% include nav.html %}
