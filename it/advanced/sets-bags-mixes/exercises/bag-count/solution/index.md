---
title: 'Solution: Contare in un bag'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Puoi trovare il codice sorgente nel file [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Output

```
2
6
```

## Commenti

1. `'the cat sat on the mat'.words` produce le sei parole e `bag` conta ciascuna di esse. Il subscript `<the>` restituisce quante volte `the` è stato trovato — due.

1. Il metodo `total` somma tutti i conteggi, che corrisponde al numero di parole inserite nel bag — `6`.

{% include nav.html %}
