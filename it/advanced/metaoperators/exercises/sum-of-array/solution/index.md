---
title: 'Solution: Media di un array'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Puoi trovare il codice sorgente nel file [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Output

```
25
```

## Commenti

1. Il meta-operatore di riduzione `[+]` inserisce l'operatore `+` tra tutti gli elementi di `@data`, quindi `[+] @data` equivale a `10 + 20 + 30 + 40`, cioè `100`. Le parentesi sono necessarie affinché la riduzione avvenga prima della divisione.

1. Dividendo la somma per `@data.elems`, il numero di elementi, si ottiene la media `25`. Se il risultato non fosse stato un intero, Raku avrebbe prodotto un `Rat` esatto invece di arrotondare.

{% include nav.html %}
