---
title: Output ed errori
translations_gpt:
---

{% include menu.html %}

## Problema

Un programma somma in un ciclo l'elenco di numeri `3, 5, 7`. A ogni giro manda il totale corrente all'errore standard come messaggio di avanzamento, e dopo il ciclo manda il risultato finale all'output standard, usando direttamente gli handle dei flussi.

Questa separazione conta: il risultato può essere catturato o inoltrato in una pipe, mentre i messaggi di avanzamento restano da parte sull'errore standard.

## Esempio

Quando esegui il programma, sullo schermo compaiono entrambi i flussi — prima i totali parziali, poi il risultato finale:

```
running total: 3
running total: 8
running total: 15
15
```

Ma se scarti l'errore standard, resta solo il risultato vero:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
