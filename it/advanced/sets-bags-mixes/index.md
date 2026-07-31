---
title: Set, bag e mix
---

{% include menu.html %}

Oltre agli array e agli hash, Raku offre alcuni contenitori specializzati per collezioni di valori. Il più semplice è il `Set` — una collezione non ordinata di valori _distinti_, dove ogni valore è membro oppure no, e i duplicati vengono ignorati.

Si crea un set con la routine `set`. I valori ripetuti vengono ridotti a uno solo:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Anche se sono stati passati cinque numeri, il set contiene solo tre elementi, perché `1` e `2` compaiono più di una volta.

La domanda principale che si pone a un set è se un valore gli appartiene. L'operatore `∈` (che si legge "è un elemento di") restituisce un booleano:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Se si preferisce restare con il semplice ASCII, lo stesso operatore può essere scritto come `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

Gli argomenti seguenti mostrano come combinare i set e introducono i bag e i mix, che sono parenti stretti del set.

{% include nav.html %}
