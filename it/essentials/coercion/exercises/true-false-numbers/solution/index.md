---
title: Soluzione di ‘True and False integers’
---

{% include menu.html %}

Per convertire un numero in un valore Booleano, puoi usare l'operatore prefisso `?` o una forma di costruttore, oppure chiamare il metodo `Bool`, o la routine `so` sia come operatore prefisso che come metodo:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

È abbastanza ovvio che i valori diversi da zero vengono convertiti in `True`. Siamo quindi più interessati a esaminare quelle opzioni che diventano `False`.

Tutti gli zeri, interi, a virgola mobile o razionali, vengono convertiti in `False`:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Ovviamente, nulla cambia se provi a negare il numero prima:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Puoi trovare il programma completo con l'esempio sopra nel file [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku).

{% include nav.html %}