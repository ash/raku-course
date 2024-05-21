---
title: Soluzione di ‘Esaminare l'output del prompt — Stringhe’
---

{% include menu.html %}

## Codice

Ecco il programma completo che esegue il compito e stampa sia la stringa inserita che il suo tipo.

```raku
my $name = prompt 'Qual è il tuo nome? ';
say $name;
say $name.WHAT;
```

🦋 Puoi trovare il codice sorgente nel file [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Esecuzioni di test

Esegui il programma un paio di volte e inserisci nomi diversi. Il programma ripete l'input e segnala anche che la variabile contiene una stringa, in altre parole, un oggetto di tipo `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
Qual è il tuo nome? Andrey
Andrey
(Str)
```

Ora, esegui di nuovo il programma, digita qualche spazio invece di un nome e premi Invio.

```console
$ raku exercises/data-types/prompt-strings.raku
Qual è il tuo nome?    

(Str)
```

Non vediamo l'output, ma vediamo che il tipo della variabile è ancora `Str`.

{% include nav.html %}