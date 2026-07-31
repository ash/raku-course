---
title: 'Solution: Giorno della settimana'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Puoi trovare il codice sorgente nel file [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Output

```
True
```

## Commenti

1. `day-of-week` numera i giorni da `1` (lunedì) a `7` (domenica), quindi i due giorni del fine settimana corrispondono esattamente ai numeri `6` e `7`.

1. Il test `>= 6` restituisce `True` sia per il sabato che per la domenica e `False` per qualsiasi giorno feriale. Il 14 febbraio 2027 è una domenica (`7`), pertanto il programma stampa `True`.

{% include nav.html %}
