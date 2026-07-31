---
title: 'Soluzione: Una vocale'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Trova il programma nel file [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Output

```
｢e｣
```

## Commenti

1. La classe `<[aeiou]>` elenca le cinque vocali; riconosce quella che compare per prima.

1. In `Hello` la lettera `H` non è nella classe, quindi la corrispondenza comincia a `e`.

{% include nav.html %}
