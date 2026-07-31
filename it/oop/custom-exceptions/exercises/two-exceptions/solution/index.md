---
title: 'Soluzione: Due tipi di eccezione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Trova il programma nel file [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Output

```
small
big
```

## Commenti

1. Il ciclo solleva una `TooSmall` al primo passaggio e una `TooBig` al secondo, ciascuna dentro un blocco a sé con il proprio `CATCH`.

1. Il phaser `CATCH` ha un ramo `when` per ogni tipo di eccezione. A ogni passaggio gira solo il ramo che corrisponde al tipo sollevato — quindi il primo passaggio stampa `small` e il secondo stampa `big`. È così che un unico insieme di gestori reagisce in modo diverso a generi diversi di errore.

{% include nav.html %}
