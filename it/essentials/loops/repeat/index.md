---
title: Using repeat
---

{% include menu.html %}

I blocchi `while` e `until` potrebbero non essere mai eseguiti se la condizione è inizialmente `False`. Al contrario, il blocco `repeat` viene sempre eseguito almeno una volta. La condizione di stop viene verificata dopo il blocco di codice. Si utilizzano le stesse parole `while` o `until` per il test.

Considera questo programma.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

La variabile `$x` è inizialmente impostata a `100`, e la condizione `while` verifica se `$x` è minore o uguale a `10`. Con il valore dato alla variabile, la condizione è già `False`, ma il blocco di codice viene comunque eseguito per primo.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Modifichiamo il programma per utilizzare `until`.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Eseguilo per confermare che funzioni come previsto:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}