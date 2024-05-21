---
title: La soluzione di 'Salutare una persona'
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my $name = prompt 'Qual è il tuo nome? ';
say 'Ciao, ', $name, '!';
```

🦋 Puoi trovare il codice sorgente nel file [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Output

Esegui il programma e inserisci un nome quando ti viene richiesto:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
Qual è il tuo nome? Inge
Ciao, Inge!
```

## Commenti

1. Questo programma utilizza una variabile scalare `$name` per memorizzare una stringa inserita dall'utente in risposta al prompt. Quando la variabile viene utilizzata nella lista che passi alla routine `say`, ottieni il nome in un messaggio.

1. C'è un modo migliore per risolvere questo problema utilizzando l'interpolazione delle stringhe. Torneremo su questo problema a breve.

{% include nav.html %}