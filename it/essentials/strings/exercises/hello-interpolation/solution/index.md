---
title: Soluzione a 'Hello, Interpolation!'
---

{% include menu.html %}

## Codice

Ecco una possibile soluzione a questo problema:

```raku
my $name = prompt 'Qual è il tuo nome? ';
say "Ciao, $name!";
```

🦋 Puoi trovare il codice sorgente nel file [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Output

Esegui il programma, e entrerà in una modalità in cui attende il tuo input. Dopo aver digitato il nome e premuto Invio, il programma continuerà e stamperà il saluto:

```console
$ raku exercises/strings/hello-concatenation.raku
Qual è il tuo nome? Raku
Ciao, Raku!
```

## Commenti

Nota che questa volta, la stringa è racchiusa tra doppi apici. Nei doppi apici, le variabili vengono interpolate, quindi il loro contenuto viene inserito nella stringa.

{% include nav.html %}