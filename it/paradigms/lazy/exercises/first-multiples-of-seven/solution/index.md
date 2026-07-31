---
title: 'Soluzione: I primi multipli di sette'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Trova il programma nel file [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Output

```
(7 14 21 28 35)
```

## Commenti

1. `1..*` è un intervallo infinito; `.map(* * 7)` moltiplica pigramente ogni elemento per sette.

1. `.head(5)` ne estrae solo i primi cinque, quindi la sorgente infinita non viene mai calcolata per intero.

{% include nav.html %}
