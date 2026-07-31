---
title: 'Soluzione: Una pipeline di feed'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Trova il programma nel file [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Output

```
[8 10 12 14 16]
```

## Commenti

1. Il primo stadio conserva i numeri maggiori di `3` (cioè `4, 5, 6, 7, 8`); il secondo raddoppia ciascuno.

1. Ogni `==>` passa il proprio risultato allo stadio successivo, e l'ultimo lo raccoglie in `@result`.

{% include nav.html %}
