---
title: Soluzione a 'Hello, Concatenation!'
---

{% include menu.html %}

## Codice

Ecco una possibile soluzione a questo problema:

```raku
my $name = prompt 'Qual è il tuo nome? ';
say 'Ciao, ' ~ $name ~ '!';
```

🦋 Puoi trovare il codice sorgente nel file [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-concatenation.raku).

## Output

Esegui il programma, e entrerà in una modalità in cui attende il tuo input. Dopo aver digitato il nome e premuto Invio, il programma continuerà e stamperà il saluto:

```console
$ raku exercises/strings/hello-concatenation.raku
Qual è il tuo nome? John
Ciao, John!
```

## Commenti

Confronta il programma con [la variante precedente](../../../../scalar-variables/exercises/greet-a-person/solution) dove abbiamo passato tre stringhe alla routine `say`:

```raku
say 'Ciao, ', $name, '!';
```

Questa volta, le tre parti sono prima concatenate e poi passate a `say` come una singola stringa.

{% include nav.html %}