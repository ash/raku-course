---
title: 'Oplossing: Tel de regels'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Je kunt de broncode vinden in het bestand [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Uitvoer

```
4
```

## Opmerkingen

1. `.IO.lines` geeft de regels van het bestand als een lijst terug.

1. `.elems` telt ze, wat `4` oplevert.

{% include nav.html %}
