---
title: 'Solution: Una settimana dopo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Puoi trovare il codice sorgente nel file [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Output

```
2027-03-07
7
```

## Commenti

1. `later(:days(7))` sposta la data in avanti di sette giorni, ovvero una settimana. Si sarebbe potuto scrivere anche `+ 7`, ma l'argomento con nome indica esplicitamente l'unità.

1. Febbraio 2027 ha 28 giorni, quindi una settimana dopo il 28 si passa automaticamente a marzo: il risultato è `2027-03-07`.

1. Chiamando `day-of-week` sulla nuova data si ottiene `7`. Questo rende facile la verifica: una data esattamente una settimana dopo deve cadere nello *stesso* giorno della settimana dell'originale, e il `2027-02-28` è una domenica (`7`) — quindi un `7` è proprio il risultato atteso.

{% include nav.html %}
