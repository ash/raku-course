---
title: Aritmetica delle date
---

{% include menu.html %}

Le date supportano l'aritmetica, il che rende semplici molti calcoli di uso quotidiano.

Aggiungendo un intero a una data, questa viene spostata in avanti di quel numero di giorni. Il risultato è una nuova data, con mese e anno aggiornati automaticamente:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Sottraendo una data da un'altra si ottiene il numero di giorni che le separano:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Per intervalli più ampi, i metodi `later` e `earlier` accettano argomenti con nome come `:days`, `:months` o `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Questi metodi garantiscono la correttezza dell'aritmetica anche ai cambi di mese e di anno, evitando di doversi preoccupare di quanti giorni abbia un determinato mese.

{% include nav.html %}
