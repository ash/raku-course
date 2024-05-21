---
title: 'Lösung: Eine Zahl buchstabieren'
---

{% include menu.html %}

Das folgende Programm hat ein eingebautes Array mit den Namen der Zahlen von 0 bis 20 und den Namen der Zehner: 20, 30 usw. In der Kette von bedingten Überprüfungen wird die Zahl einer der Regeln des Buchstabierens zugeordnet.

## Code

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Zweistellige nicht-runde Zahlen, z.B. 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Vielfache von 10, z.B. 50
    say @names[$n / 10 + 18];
}
```

🦋 Finde das Programm in der Datei [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Beispiel

Führe das Programm ein paar Mal aus, um alle drei Zweige der `if`—`elsif`—`else`-Konstruktion zu überprüfen.

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