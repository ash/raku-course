---
title: 'Soluzione: Create una directory'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Trova il programma nel file [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Output

```
True
True
```

## Commenti

1. `mkdir` crea la directory e `.IO.d` conferma che `reports` è una directory.

1. Poiché la directory ora esiste, possiamo scrivervi dentro un file indicando un percorso che comprende il nome della directory, `reports/data.txt`. Controllare `.e` su quel percorso conferma che il file è stato creato dentro la nuova directory.

1. L'ordine conta: `spurt` **non** crea per te le directory mancanti. Scrivere su `reports/data.txt` prima che la directory `reports` esista fallisce con un errore del tipo `Failed to open file … : No such file or directory`. Creare prima la directory — come fa qui `mkdir` — è ciò che permette alla scrittura di riuscire. Comodamente, `mkdir` crea anche tutte le directory intermedie mancanti, quindi un percorso annidato come `mkdir 'reports/2026'` costruisce l'intera catena in una sola chiamata.

{% include nav.html %}
