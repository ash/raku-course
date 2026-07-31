---
title: 'Soluzione: Totali progressivi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Trova il programma nel file [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Output

```
[2 6 12 20]
```

## Commenti

1. Il blocco tiene una `$sum` progressiva in una variabile fuori dal map. Ogni chiamata
somma l'elemento corrente e restituisce il nuovo totale, quindi la lista mappata è la
sequenza delle somme parziali.

1. Raku ce l'ha incorporato. La [riduzione triangolare](/it/advanced/metaoperators/reduction)
`[\+]` conserva ogni somma parziale, quindi l'intera soluzione è un'unica espressione:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Restituisce una `Seq`, quindi il suo gist usa le parentesi tonde — `(2 6 12 20)` —
    invece del `[2 6 12 20]` dell'array, ma i numeri sono gli stessi.

{% include nav.html %}
