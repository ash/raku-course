---
title: 'Solution: Numeri dei giorni della settimana'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Puoi trovare il codice sorgente nel file [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Output

```
Fri
Mon
```

## Commenti

1. Scrivere le costanti come coppie permette di scegliere i numeri, qui partendo da `1`.

1. Chiamare il tipo enum come `Day(5)` esegue la ricerca inversa: trova la costante il cui valore e' `5`, cioe' `Fri`. Allo stesso modo `Day(1)` restituisce `Mon`. Questo e' l'inverso di `Fri.value`, che andrebbe dal nome al numero.

{% include nav.html %}
