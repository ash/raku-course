---
title: 'Soluzione: Il secondo valore più grande'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Trova il programma nel file [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Output

```
7
```

## Commenti

1. Trasformare la lista in un `Set` con `.Set` butta via il `9` duplicato, dato che un
insieme contiene ogni valore una volta sola.

1. `.keys` restituisce i valori distinti — ancora `Int`, non stringhe — quindi un semplice
`.sort` li ordina numericamente. Il secondo più grande sta allora un posto prima della
fine, `[*-2]`.

{% include nav.html %}
