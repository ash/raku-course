---
title: 'Soluzione: Somma delle cifre per ricorsione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Trova il programma nel file [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Output

```
15
```

## Commenti

1. Il caso base è un numero di una sola cifra, che è la somma delle proprie cifre.
Altrimenti la routine stacca l'ultima cifra con `$n % 10` e ricorre sul resto,
`$n div 10`.

{% include nav.html %}
