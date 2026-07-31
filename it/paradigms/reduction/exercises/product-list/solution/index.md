---
title: 'Soluzione: Prodotto di una lista'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say [*] 1..6;
```

🦋 Trova il programma nel file [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Output

```
720
```

## Commenti

1. `[*]` inserisce `*` fra ogni elemento dell'intervallo, moltiplicandoli tutti.

1. `1 * 2 * 3 * 4 * 5 * 6` fa `720` — lo stesso del fattoriale di `6`.

{% include nav.html %}
