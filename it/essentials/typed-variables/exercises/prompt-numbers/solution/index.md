---
title: Soluzione di ‘Esaminare il risultato del prompt — Numeri’
---

{% include menu.html %}

## Codice

Ecco il programma completo che risolve il problema e stampa sia il valore inserito che il suo tipo.

```raku
my $n = prompt 'Inserisci un numero: ';
say $n;
say $n.WHAT;
```

🦋 Puoi trovare il codice sorgente nel file [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Esecuzioni di test

Esegui il programma più volte e inserisci numeri di diversi tipi.

### Numeri interi

Proviamo prima i numeri interi, sia positivi che negativi.

```console
$ raku exercises/what/prompt-numbers.raku
Inserisci un numero: 10
10
(IntStr)
```

Il tipo del risultato è `IntStr`. Questo è un tipo incorporato che ha le caratteristiche sia di `Int` che di `Str`.

### Numeri razionali

Ora proviamo un numero razionale. Ricorda che in Raku, la notazione con un punto decimale crea un numero `Rat` piuttosto che un numero in virgola mobile.

```console
$ raku exercises/what/prompt-numbers.raku
Inserisci un numero: 3.14
3.14
(RatStr)
```

Questa volta, il programma dice che il tipo di dato in `$n` è `RatStr`, che sta per un tipo combinato di `Rat` e `Str`.

### Numeri in virgola mobile

Infine, prova un numero in notazione scientifica. Dovresti essere in grado di indovinare l'output a questo punto.

```console
$ raku exercises/what/prompt-numbers.raku
Inserisci un numero: 5e-14
5e-14
(NumStr)
```

Infatti, il nuovo valore è del tipo `NumStr`.

{% include nav.html %}