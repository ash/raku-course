---
title: 'Soluzione: Iniziale e cognome'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Trova il programma nel file [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Output

```
Smith
```

## Commenti

1. `$<initial>=(\w)` cattura un singolo carattere di parola; `$<surname>=(\w+)` cattura la sequenza di lettere dopo lo spazio.

1. Il cognome si rilegge poi per nome come `$<surname>`, e il prefisso `~` lo stampa come stringa semplice; senza di esso, `say $<surname>` mostrerebbe l'oggetto match come `｢Smith｣`.

{% include nav.html %}
