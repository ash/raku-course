---
title: 'Soluzione: Ha trovato corrispondenza?'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Trova il programma nel file [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Output

```
True
```

## Commenti

1. Una corrispondenza riuscita è un valore vero, ma si stampa come oggetto match. La funzione `so` lo trasforma in un semplice `True` o `False`.

{% include nav.html %}
