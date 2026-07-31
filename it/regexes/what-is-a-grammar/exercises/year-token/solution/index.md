---
title: 'Soluzione: Anno e mese'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Trova il programma nel file [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Output

```
｢2025｣
｢06｣
```

## Commenti

1. Vengono dichiarati due regex con nome, ciascuno descrive un pezzo della data: un `year` di quattro cifre e un `month` di due.

1. Lo schema li combina con un trattino letterale in mezzo, e ciascuno viene catturato sotto il proprio nome. Costruire uno schema più grande a partire da piccole parti con nome come queste è esattamente l'idea che una grammatica formalizza.

{% include nav.html %}
