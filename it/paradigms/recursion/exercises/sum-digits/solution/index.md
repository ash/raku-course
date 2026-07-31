---
title: 'Soluzione: Somma delle cifre'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Trova il programma nel file [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Output

```
10
```

## Commenti

1. Il caso base è un numero di una sola cifra, che è la somma delle proprie cifre.

1. Altrimenti `$n % 10` è l'ultima cifra e `$n div 10` la elimina; `1 + 2 + 3 + 4` fa `10`.

{% include nav.html %}
