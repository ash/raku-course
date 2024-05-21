---
title: until
---

{% include menu.html %}

Il costrutto `until` è l'opposto di `while`. Esegue il blocco di codice fino a quando la condizione diventa `True` (o, in altre parole, mentre è `False`).

Ecco un [programma modificato dalla pagina precedente](../while) che utilizza `until` e una nuova condizione:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Inserisci un numero, che non sia maggiore di 10: ';
    say "Hai inserito $x.";
}
say "$x è maggiore di 10.";
```

Esegui il programma e controlla l'output:

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

## `until` vs. `while`

Confronta i programmi equivalenti con `while` e `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Come vedi, le condizioni sono versioni negate l'una dell'altra. In questo senso, `while` e `until` sono nella stessa relazione di `if` e `unless`.

{% include nav.html %}