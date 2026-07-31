---
title: Due tipi di eccezione
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci due classi di eccezione personalizzate, `TooSmall` e `TooBig`, ciascuna erede di `Exception`, con metodi `message` che restituiscono rispettivamente `too small` e `too big`.

Scorri i due tipi e, per ciascuno, solleva un'eccezione di quel tipo dentro un blocco a sé. Usa un phaser `CATCH` con un ramo `when` per ogni tipo, stampando `small` per `TooSmall` e `big` per `TooBig`. In questo modo vedi usati entrambi i rami.

## Esempio

Il programma stampa:

```
small
big
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
