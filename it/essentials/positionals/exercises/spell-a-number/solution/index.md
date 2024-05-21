---
title: 'Soluzione: Scrivere un numero'
---

{% include menu.html %}

Il programma qui sotto ha un array integrato con i nomi dei numeri da 0 a 20 e i nomi delle decine: 20, 30, ecc. Nella catena di controlli condizionali, il numero viene distribuito a una delle regole di scrittura.

## Codice

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Numeri a due cifre non tondi, ad es., 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Multipli di 10, ad es., 50
    say @names[$n / 10 + 18];
}
```

🦋 Trova il programma nel file [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Esempio

Esegui il programma alcune volte per verificare tutti e tre i rami della costruzione `if`—`elsif`—`else`.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}