---
title: 'Soluzione: Da due a quattro'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Trova il programma nel file [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Output

```
｢abcd｣
```

## Commenti

1. `\w ** 2..4` riconosce da due a quattro caratteri di parola.

1. Essendo goloso, ne prende quanti l'intervallo gli conceda — quattro — quindi la corrispondenza è `abcd`.

{% include nav.html %}
