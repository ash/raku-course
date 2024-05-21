---
title: Soluzione a 'Lunghezza del nome'
---

{% include menu.html %}

## Codice

Ecco la soluzione al compito:

```raku
my $name = prompt 'Qual è il tuo nome? ';
say $name.chars;
```

🦋 Puoi trovare il codice sorgente nel file [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Output

Esegui il programma e inserisci il nome.

```console
$ raku exercises/strings/name-length.raku 
Qual è il tuo nome? Alexandra
9
```

## Commenti

In questo programma, otteniamo la lunghezza della stringa chiamando il metodo `chars` sulla variabile `$name`. Poiché la variabile contiene una stringa, il metodo ne restituisce la lunghezza.

{% include nav.html %}