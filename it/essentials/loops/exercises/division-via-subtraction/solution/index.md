---
title: 'Soluzione: Divisione tramite sottrazione'
---

{% include menu.html %}

La divisione è una sottrazione ripetuta. Il programma ha un ciclo `while` che riduce `$a` del valore di `$b` e lo ripete finché il valore corrente di `$a` non è inferiore a `$b`. La variabile `$n` conta il numero di iterazioni, ed è anche il risultato di cui abbiamo bisogno.

## Codice

Ecco il programma completo:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Trova il programma nel file [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/division-via-subtraction.raku).

## Output

Esegui il programma alcune volte. Inizia con i valori dati che danno un numero intero esatto:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Prova anche, ad esempio, a cambiare `$b` a `20` e conferma che il risultato è corretto:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}