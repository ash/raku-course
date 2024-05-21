---
title: while
---

{% include menu.html %}

Il costrutto `while` ha una condizione booleana e un blocco di codice. Raku esegue il blocco di codice ripetutamente _mentre_ la condizione è `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Inserisci un numero, che non sia maggiore di 10: ';
    say "Hai inserito $x.";
}
say "$x è maggiore di 10.";
```

Il programma chiede di inserire un numero, e se il numero non è maggiore di 10, il corpo del ciclo si ripete. Non appena il numero inserito infrange la condizione `$x <= 10`, il ciclo termina e viene eseguita la riga successiva del programma.

```console
$ raku t.raku
Inserisci un numero, che non sia maggiore di 10: 10
Hai inserito 10.
Inserisci un numero, che non sia maggiore di 10: 4
Hai inserito 4.
Inserisci un numero, che non sia maggiore di 10: 1
Hai inserito 1.
Inserisci un numero, che non sia maggiore di 10: 20
Hai inserito 20.
20 è maggiore di 10.
```

{% include nav.html %}