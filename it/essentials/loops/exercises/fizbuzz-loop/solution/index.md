---
title: 'Soluzione: FizzBuzz in un ciclo'
---

{% include menu.html %}

Questa volta, il controllo di divisibilità avviene in un ciclo. Invece di stampare direttamente, la frase viene prima accumulata in una variabile separata e successivamente interpolata in una stringa.

## Codice

Ecco la nuova soluzione:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Trova il programma nel file [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Output

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Commento

Per un risolutore di problemi pedante, la soluzione potrebbe non essere perfetta poiché stampa uno spazio dopo i due punti anche per quei numeri che non hanno ricevuto alcun Fizz o Buzz. Modifica il programma per evitare questo problema.

{% include nav.html %}