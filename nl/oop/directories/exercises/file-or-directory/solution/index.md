---
title: 'Oplossing: Bestand of map?'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Je kunt de broncode vinden in het bestand [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Uitvoer

```
True
False
```

## Opmerkingen

1. `.f` test op een gewoon bestand, dus geeft hij `True` terug voor `a.txt`.

1. `.d` test op een map. Gevraagd naar precies hetzelfde pad geeft hij `False` terug, omdat `a.txt` een bestand is en geen map. De twee tests vullen elkaar aan, en zo houd je een bestand en een map uit elkaar.

{% include nav.html %}
