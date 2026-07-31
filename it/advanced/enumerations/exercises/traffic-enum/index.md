---
title: Semafori
---

{% include menu.html %}

## Problema

Definisci un enum `Light` con le costanti `red`, `amber` e `green` (in quest'ordine). Dichiara una variabile tipizzata con l'enum, `my Light $current`, e impostala su `red`. Stampa il colore insieme al numero che lo rappresenta, nella forma `red is 0`.

Poi **cambia il semaforo un paio di volte**: riassegna `$current` ad `amber`, poi a `green`, stampandolo allo stesso modo dopo ogni cambio, in modo da percorrere `red` -> `amber` -> `green`.

Potresti aspettarti che `$current++` passi automaticamente al colore successivo: provalo e guarda cosa succede.

## Esempio

Il programma stampa:

```
red is 0
amber is 1
green is 2
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
