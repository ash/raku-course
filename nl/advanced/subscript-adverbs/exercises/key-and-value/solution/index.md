---
title: 'Solution: Sleutel en waarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Je kunt de broncode vinden in het bestand [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Uitvoer

```
(x 10)
```

## Opmerkingen

1. Het adverb `:kv` geeft zowel de sleutel als de waarde terug als een lijst.

1. Voor een hash is de sleutel de naam waarmee je subscript, dus `%h<x>:kv` geeft de lijst `(x 10)`.

{% include nav.html %}
