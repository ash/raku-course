---
title: 'Solution: L''ordine degli END'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Puoi trovare il codice sorgente nel file [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Output

```
body
second END
first END
```

## Commenti

1. Entrambi i phaser `END` vengono eseguiti dopo il codice principale, quindi `body` viene stampato per primo.

1. Piu phaser `END` vengono eseguiti in ordine last-in, first-out: il `second END`, dichiarato dopo, viene eseguito prima del `first END`. Questo rispecchia il modo in cui la pulizia di solito deve annullare la configurazione piu recente per prima.

{% include nav.html %}
