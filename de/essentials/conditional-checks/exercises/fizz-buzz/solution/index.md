---
title: 'Lösung: FizzBuzz'
---

{% include menu.html %}

Diese Aufgabe ist eine klassische Interviewaufgabe, die hilft zu überprüfen, ob du an die Fälle denkst, in denen beide Bedingungen `True` sind. Wenn die Zahl durch sowohl 3 als auch 5 teilbar ist, sollte das Programm `FizzBuzz` ausgeben.

## Code

Hier ist die Lösung:

```raku
my $n = prompt 'Gib eine Zahl ein: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Finde das Programm in der Datei [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku).

## Beispiel

Du musst einige Klassen von Eingabedaten testen:

* Die Zahlen, die durch 3 teilbar sind, z.B.: 3, 6, 9, 12.
* Die Zahlen, die durch 5 teilbar sind, z.B.: 5, 10, 15, 20.
* Die Zahlen, die durch sowohl 3 als auch 5 teilbar sind, z.B.: 15, 30, 45.
* Andere Zahlen, die weder durch 3 noch durch 5 teilbar sind, z.B.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Gib eine Zahl ein: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Gib eine Zahl ein: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Gib eine Zahl ein: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Gib eine Zahl ein: 30
FizzBuzz
```

{% include nav.html %}