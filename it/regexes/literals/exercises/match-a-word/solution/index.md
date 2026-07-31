---
title: 'Soluzione: Riconoscete una frase'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Trova il programma nel file [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Output

```
｢love Raku｣
```

## Commenti

1. Qui lo spazio fra le parole è significativo, quindi la frase è avvolta fra virgolette: `'love Raku'`. Senza le virgolette il motore dei regex ignorerebbe lo spazio e cercherebbe `loveRaku`, che non è nella stringa.

1. Lo smartmatch restituisce un oggetto match che copre l'intera frase fra virgolette, e `say` lo stampa fra parentesi angolari.

{% include nav.html %}
