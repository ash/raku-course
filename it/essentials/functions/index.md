---
title: Creare e chiamare funzioni in Raku
---

{% include menu.html %}

Hai raggiunto l'ultima sezione della prima parte del corso. Completandola, avrai tutte le conoscenze necessarie per creare praticamente _qualsiasi_ programma in Raku. Il soggetto di questa sezione sono le _funzioni_, o _subroutine_, o anche semplicemente _routine_.

Una funzione è una parte riutilizzabile del codice con un proprio nome. Puoi _chiamare_ le funzioni da diversi punti del programma.

## Creare una funzione

Per creare una funzione, usa la parola chiave `sub` seguita dal nome della funzione. Il corpo della funzione è racchiuso in una coppia di parentesi graffe.

```raku
sub greet {
    say 'Hello, World!';
}
```

## Usare una funzione

Per usare la funzione, basta mettere il suo nome nel punto in cui hai bisogno di chiamarla. In Raku, la definizione di una funzione può essere posizionata prima o dopo il punto in cui la funzione viene utilizzata.

```raku
say 'Questo è ciò che di solito stampa il primo programma:';
greet;    

sub greet {
    say 'Hello, World!';
}
```

Il programma stampa entrambi i messaggi:

```console
$ raku t.raku
Questo è ciò che di solito stampa il primo programma:
Hello, World!
```

Ora, diamo un'occhiata ad altri dettagli sulla creazione e l'uso delle funzioni.

{% include nav.html %}