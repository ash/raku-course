---
title: 'Solution: FizzBuzz in einer Schleife'
---

{% include menu.html %}

Diesmal erfolgt die Teilbarkeitsprüfung in einer Schleife. Anstatt direkt zu drucken, wird der Ausdruck zuerst in einer separaten Variablen gesammelt und später in eine Zeichenkette interpoliert.

## Code

Hier ist die neue Lösung:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Finde das Programm in der Datei [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fizbuzz-loop.raku).

## Ausgabe

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Kommentar

Für einen pedantischen Problemlöser mag die Lösung nicht perfekt sein, da sie ein Leerzeichen nach dem Doppelpunkt druckt, selbst für diejenigen Zahlen, die kein Fizz oder Buzz erhalten haben. Ändere das Programm, um dieses Problem zu vermeiden.

{% include nav.html %}