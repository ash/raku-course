---
title: 'Soluzione: Filtrare con un blocco'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Trova il programma nel file [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Output

```
5
```

## Commenti

1. `grep` prende il blocco `* > 5` e conserva i numeri per i quali è vero: `6, 7, 8, 9, 10`.

1. `.elems` li conta, dando `5`.

{% include nav.html %}
