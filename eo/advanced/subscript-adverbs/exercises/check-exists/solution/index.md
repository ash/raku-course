---
title: 'Solvo: Ĉu la ŝlosilo ekzistas'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Vi povas trovi la fontkodon en la dosiero [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Eligo

```
False
```

## Komentoj

1. La adverbo `:exists` redonas, ĉu la ŝlosilo ĉeestas, sen preni la valoron.

1. La hako ne havas ŝlosilon `z`, do ĝi redonas `False` — kaj, malsame ol ordinara serĉo, ĝi ne kreas la ŝlosilon kiel kroman efikon.

{% include nav.html %}
