---
title: 'Solution: Whatever con map'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al problema.

## Codice

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Puoi trovare il codice sorgente nel file [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Output

```
(3 6 9 12)
```

## Commenti

1. `* * 3` e un'espressione Whatever che diventa un `WhateverCode` a un argomento — un valore funzione perfettamente ordinario salvato in `$triple`.

1. Poiche e semplicemente una funzione, `map` la accetta come qualsiasi blocco, applicandola a ciascun elemento di `1..4` per ottenere `(3 6 9 12)`.

{% include nav.html %}
