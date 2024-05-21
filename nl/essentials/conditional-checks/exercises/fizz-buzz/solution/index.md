---
title: 'Oplossing: FizzBuzz'
---

{% include menu.html %}

Deze taak is een klassieke interviewtaak die helpt te controleren of je denkt aan de gevallen waarin beide voorwaarden `True` zijn. Als het getal deelbaar is door zowel 3 als 5, moet het programma `FizzBuzz` afdrukken.

## Code

Hier is de oplossing:

```raku
my $n = prompt 'Voer een getal in: ';

print 'Fizz' als $n %% 3;
print 'Buzz' als $n %% 5;
print "\n";
```

🦋 Vind het programma in het bestand [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku).

## Voorbeeld

Je moet een paar klassen van invoergegevens testen:

* De getallen deelbaar door 3, bijv.: 3, 6, 9, 12.
* De getallen deelbaar door 5, bijv.: 5, 10, 15, 20.
* De getallen deelbaar door 3 en door 5, bijv.: 15, 30, 45.
* Andere getallen, die niet deelbaar zijn door 3 noch 5, bijv.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Voer een getal in: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Voer een getal in: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Voer een getal in: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Voer een getal in: 30
FizzBuzz
```

{% include nav.html %}