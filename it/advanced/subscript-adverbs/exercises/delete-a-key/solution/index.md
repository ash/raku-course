---
title: 'Solution: Eliminare una chiave'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Puoi trovare il codice sorgente nel file [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Output

```
2
```

## Commenti

1. L'avverbio `:delete` rimuove l'elemento dall'hash (qui ignoriamo il valore che restituisce).

1. L'hash iniziava con tre elementi e ora ne ha `2`, a conferma che uno è stato rimosso. Contare con `.elems` rende l'output prevedibile senza dipendere dall'ordine delle chiavi.

{% include nav.html %}
