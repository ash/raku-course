---
title: La variabile topic
---

{% include menu.html %}

## Problema

`$_` e' la variabile *topic*. Un ciclo `for` la imposta a ciascun elemento a turno, e una chiamata di metodo scritta con un punto iniziale e senza invocante — come `.chars` — agisce su di essa, quindi `.chars` significa `$_.chars`.

Itera sulle tre stringhe `'apple'`, `'fig'` e `'cherry'`. Per ciascuna, stampa una riga nella forma `<parola> has <n> letters`, usando il topic `$_` per la parola e una chiamata con punto iniziale `.chars` per la sua lunghezza. Osserva come `$_` diventa ciascuna stringa a turno.

## Esempio

Il programma stampa:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
