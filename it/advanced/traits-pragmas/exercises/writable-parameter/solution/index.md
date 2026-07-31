---
title: 'Solution: Un parametro scrivibile'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Puoi trovare il codice sorgente nel file [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Output

```
42
```

## Commenti

1. `is rw` lega il parametro `$n` alla variabile del chiamante `$score`, quindi `$n *= 2` all'interno di `double` modifica `$score` stesso — ecco perché stampa `42`.

1. Senza `is rw`, il parametro sarebbe in sola lettura e `$n *= 2` causerebbe un errore di compilazione. Contrassegnandolo con `is copy` si darebbe a `double` una copia privata da modificare, lasciando `$score` inalterato a `21`.

{% include nav.html %}
