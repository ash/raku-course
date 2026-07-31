---
title: Pulizia all'uscita
---

{% include menu.html %}

## Problema

La vera forza di `LEAVE` è che viene eseguito *in qualunque modo* si esca dal blocco, incluso un `return` anticipato.

Scrivi una subroutine `work` il cui corpo inizi con un phaser `LEAVE` che stampa `Cleanup`. Poi, sempre all'interno della subroutine, stampa `Working`, esegui immediatamente un `return` e inserisci una riga `say 'never reached'` dopo il `return`. Chiama la subroutine. Il `return` anticipato salta l'ultima riga, ma `Cleanup` viene comunque stampato.

## Esempio

Il programma stampa:

```
Working
Cleanup
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
