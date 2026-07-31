---
title: 'Soluzione: Il testo trovato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Trova il programma nel file [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Output

```
base
```

## Commenti

1. Ogni smartmatch conserva il proprio risultato nella variabile speciale di match `$/`, quindi non c'è bisogno di assegnarlo a una variabile nostra.

1. L'oggetto match contiene il testo corrispondente; chiamare `.Str` su `$/` restituisce quel testo come stringa ordinaria. Stampare direttamente l'oggetto match avrebbe mostrato `｢base｣`.

{% include nav.html %}
