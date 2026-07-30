---
title: 'Solution: Een hash subscripten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Je kunt de broncode vinden in het bestand [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Uitvoer

```
1
```

## Opmerkingen

1. De `< >`-subscript is een postcircumfix-operator: deze volgt op een term (de hash) en omsluit de sleutel.

1. `%h<a>` geeft de waarde terug die is opgeslagen onder de sleutel `a`, namelijk `1`.

{% include nav.html %}
