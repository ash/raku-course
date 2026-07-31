---
title: 'Solution: FizzBuzz'
---

{% include menu.html %}

Questo compito è un classico esercizio da colloquio che aiuta a verificare se consideri i casi in cui entrambe le condizioni sono `True`. Se il numero è divisibile sia per 3 che per 5, il programma dovrebbe stampare `FizzBuzz`.

## Codice

Ecco la soluzione:

```raku
my $n = prompt 'Inserisci un numero: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Trova il programma nel file [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/fizz-buzz.raku).

## Esempio

Devi testare alcune classi di dati di input:

* I numeri divisibili per 3, ad esempio: 3, 6, 9, 12.
* I numeri divisibili per 5, ad esempio: 5, 10, 15, 20.
* I numeri divisibili sia per 3 che per 5, ad esempio: 15, 30, 45.
* Altri numeri, che non sono divisibili né per 3 né per 5, ad esempio: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Inserisci un numero: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Inserisci un numero: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Inserisci un numero: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Inserisci un numero: 30
FizzBuzz
```

{% include nav.html %}