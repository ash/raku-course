---
title: "Soluzione: Stampa l'avviso"
---

{% include menu.html %}

## Codice

Ecco la soluzione:

```raku
my $age = prompt 'Qual è la tua età? ';

if $age < 0 {
    note 'Hai inserito un numero negativo!';
}
else {
    say "La tua età è $age";
}
```

🦋 Trova il programma nel file [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/print-the-warning.raku).

## Output

Alcuni casi possibili:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Qual è la tua età? 20
La tua età è 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Qual è la tua età? -1
Hai inserito un numero negativo!
```

Per assicurarti che il messaggio di errore venga stampato su `STDERR`, reindirizza l'output. Il prompt per inserire l'età non apparirà, ma puoi comunque inserire un numero. L'avviso rimane visibile.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
Hai inserito un numero negativo!
```

{% include nav.html %}