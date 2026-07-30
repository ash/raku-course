---
title: 'Solution: Een sleutel verwijderen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Je kunt de broncode vinden in het bestand [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Uitvoer

```
2
```

## Opmerkingen

1. Het adverb `:delete` verwijdert het item uit de hash (hier negeren we de waarde die het teruggeeft).

1. De hash begon met drie items en heeft er nu `2`, wat bevestigt dat er een is verwijderd. Tellen met `.elems` houdt de uitvoer voorspelbaar zonder afhankelijk te zijn van de volgorde van de sleutels.

{% include nav.html %}
