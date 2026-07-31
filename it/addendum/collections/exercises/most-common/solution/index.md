---
title: "Soluzione: L'elemento più frequente"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Trova il programma nel file [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Output

```
a
```

## Commenti

1. Dopo aver contato ogni valore in `%count`, ordinare le coppie per `-*.value` mette per
prima la più frequente; `[0].key` restituisce poi quell'elemento.

1. Raku può fare il conteggio al posto tuo con un [`Bag`](/it/advanced/sets-bags-mixes),
che conta quante volte compare ogni valore. Poi `.max(*.value)` sceglie la coppia con il
conteggio più alto, e `.key` è l'elemento stesso:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    L'intero conteggio è un'unica chiamata di metodo, e non c'è alcun hash esplicito da
    gestire.

{% include nav.html %}
