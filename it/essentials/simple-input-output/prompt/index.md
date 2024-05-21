---
title: Input with prompt
---

{% include menu.html %}

L'opposto di `say` è `prompt`. Attende quando l'utente inserisce qualcosa e preme Invio. Poi, invia l'input al programma come una stringa. Puoi prendere il risultato di `prompt` e passarlo a `say`. In questo caso, ripeti ciò che l'utente digita. Creiamo un programma del genere:

```raku
say prompt;
```

Se esegui questo programma, potresti essere confuso poiché il programma entra in uno stato in cui attende solo un input. Per rendere il programma più user-friendly, è bene stampare il messaggio di prompt. Non è necessario aggiungere un `say` separato, perché puoi passare il messaggio a `prompt`:

```raku
prompt 'Quale lingua hai intenzione di imparare? '
```

Prima di concludere questa sezione, combiniamo tutti i pezzi e creiamo un programma che chiede i desideri dell'utente e poi stampa una frase usando il testo che l'utente ha inserito.

```raku
say 'Hai intenzione di imparare ', prompt 'Quale lingua hai intenzione di imparare? ';
```

Se hai inserito `Raku`, otterrai la seguente frase stampata:

    Hai intenzione di imparare Raku

Ok, ora possiamo parlare con il programma, e possiamo fare in modo che il programma parli con noi!

Nota che poiché `say` deve conoscere le stringhe prima di stamparle, Raku eseguirà prima `prompt`, in modo che il dialogo avvenga nell'ordine corretto:

```console
$ raku t.raku 
Quale lingua hai intenzione di imparare? Raku
Hai intenzione di imparare Raku
```

{% include nav.html %}