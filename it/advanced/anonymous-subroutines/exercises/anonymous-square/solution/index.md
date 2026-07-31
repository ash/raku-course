---
title: 'Solution: Un quadrato anonimo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Puoi trovare il codice sorgente nel file [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Output

```
(1 4 9)
```

## Commenti

1. La `sub ($x) { $x * $x }` non ha nome e non viene mai memorizzata in una variabile: viene passata direttamente a `map` come argomento.

1. `map` la applica a ciascun elemento di `1, 2, 3`, elevandoli al quadrato in `(1 4 9)`. Passare una subroutine anonima inline in questo modo e il motivo piu comune per scriverne una.

{% include nav.html %}
