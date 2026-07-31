---
title: 'Solution: Semafori'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Puoi trovare il codice sorgente nel file [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Output

```
red is 0
amber is 1
green is 2
```

## Commenti

1. `my Light $current` e' una variabile ordinaria e mutabile, vincolata solo al tipo `Light`. Assegnare la costante successiva fa avanzare il semaforo, e il numero segue il nome ogni volta: `0`, `1`, `2`.

1. `$current++` sembra che dovrebbe passare automaticamente al colore successivo, ma fallisce con un errore di controllo del tipo. `++` tratta la costante come il suo numero semplice e restituisce un `Int` (`red` diventa `1`), e un `Int` non soddisfa piu' il tipo `Light`. Quindi si avanza il semaforo assegnando la costante successiva, come mostrato sopra.

1. Il vincolo di tipo si applica a ogni assegnazione, non solo alla prima. `$current` accettera' `red`, `amber` o `green`, ma assegnare qualcosa che non e' un `Light` — un numero nudo o una stringa — causerebbe un errore di controllo del tipo.

{% include nav.html %}
