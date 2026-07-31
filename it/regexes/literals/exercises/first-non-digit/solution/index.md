---
title: 'Soluzione: Il primo carattere non numerico'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say '42abc' ~~ /\D/;
```

🦋 Trova il programma nel file [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Output

```
｢a｣
```

## Commenti

1. `\D` è l'opposto di `\d`: riconosce qualunque carattere che non sia una cifra.

1. I primi due caratteri sono cifre, quindi la corrispondenza comincia a `a`.

{% include nav.html %}
