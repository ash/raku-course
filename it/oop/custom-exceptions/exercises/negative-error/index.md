---
title: Un errore per i numeri negativi
translations_gpt:
---

{% include menu.html %}

## Problema

Definisci una classe di eccezione personalizzata `Negative` che eredita da `Exception`, ha un attributo `n` e il cui metodo `message` restituisce `<n> is negative`.

Scrivi una subroutine `check($n)` che solleva una `Negative` (che porta con sé quell'`n`) quando il suo argomento è minore di zero, e altrimenti restituisce l'argomento. Poi, dentro un blocco, chiama `check(-5)` e usa un phaser `CATCH` con `when Negative` per stampare il messaggio dell'eccezione.

Infine, dopo il blocco, solleva un'altra `Negative` (con `n` uguale a `-10`) per mostrare che un'eccezione sollevata dove nessun `CATCH` la sorveglia chiude il programma.

## Esempio

Il programma stampa:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
