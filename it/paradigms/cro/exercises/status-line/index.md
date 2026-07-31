---
title: Stato con un client
translations_gpt:
---

{% include menu.html %}

## Problema

Ottieni lo stato di una pagina web nel modo facile — con il **modulo client di Cro** invece che con un socket grezzo. Con `Cro::HTTP::Client.get` richiedi `http://example.com/`, attendi la risposta e stampane lo `.status`, senza analizzare alcun testo.

> Questo esercizio ha bisogno del modulo Cro installato (`zef install cro`) e di una connessione di rete funzionante.

## Esempio

Quando gira, il programma stampa:

```
200
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
