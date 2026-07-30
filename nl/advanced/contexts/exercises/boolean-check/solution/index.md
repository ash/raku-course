---
title: 'Solution: Een Booleaanse controle'
translations_gpt: The solution of 'A Boolean check'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @empty;
say ?@empty;
```

🦋 Je kunt de broncode vinden in het bestand [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Uitvoer

```
False
```

## Opmerkingen

1. De `?`-prefix dwingt Booleaanse context af.

1. Een lege array is onwaar, wat precies is waar `if @array` op vertrouwt.

{% include nav.html %}
