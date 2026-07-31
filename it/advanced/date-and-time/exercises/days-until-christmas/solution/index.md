---
title: 'Solution: Settimane a Natale'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Puoi trovare il codice sorgente nel file [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Output

```
25 weeks and 6 days
```

## Commenti

1. Sottraendo un `Date` da un altro si ottiene il numero di giorni che li separano — in questo caso `181` — senza bisogno di contare manualmente i giorni di ciascun mese. La data più recente è scritta per prima, così il risultato è positivo.

1. La divisione intera `div` restituisce il numero intero di settimane (`181 div 7` fa `25`), mentre l'operatore modulo `%` restituisce i giorni rimanenti (`181 % 7` fa `6`).

{% include nav.html %}
