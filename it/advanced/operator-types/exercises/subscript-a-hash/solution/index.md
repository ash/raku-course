---
title: 'Solution: Subscript di un hash'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Puoi trovare il codice sorgente nel file [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Output

```
1
```

## Commenti

1. L'indicizzazione `< >` è un operatore postcircumfisso: segue un termine (l'hash) e circonda la chiave.

1. `%h<a>` restituisce il valore memorizzato sotto la chiave `a`, che è `1`.

{% include nav.html %}
