---
title: Figure che condividono un ruolo
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci un ruolo `Shape` che richiede un metodo `area`, poi crea le classi `Circle` e
`Square` che assumono il ruolo.

Scrivi una subroutine `describe` il cui parametro sia *tipizzato* come `Shape`, così che
accetti qualunque figura e rifiuti tutto ciò che non lo è. Deve stampare l'area della
figura etichettata con il nome della sua classe. Chiamala per un cerchio di raggio `2` e
un quadrato di lato `3`.

La subroutine non controlla mai che genere di figura ha ricevuto: poiché il suo parametro
è una `Shape`, l'oggetto ha con certezza un metodo `area`, quindi la stessa chiamata
`.area` funziona su qualunque figura arrivi. È questo che ti dà il ruolo — un unico tipo
che puoi richiedere e un solo pezzo di codice che tratta allo stesso modo ogni classe che
lo assume.

## Esempio

Il programma stampa:

```
Circle: 12.56636
Square: 9
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
