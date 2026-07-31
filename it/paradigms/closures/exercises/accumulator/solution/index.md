---
title: 'Soluzione: Un accumulatore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Trova il programma nel file [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Output

```
15
```

## Commenti

1. La chiusura cattura `$sum`, che sopravvive fra una chiamata e l'altra.

1. `acc(10)` porta il totale a `10`; `acc(5)` aggiunge cinque e restituisce `15`.

{% include nav.html %}
