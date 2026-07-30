---
title: 'Lösung: Sieb des Eratosthenes'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Du findest den Quellcode in der Datei [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Ausgabe

```
(2 3 5 7 11 13 17 19 23 29)
```

## Kommentare

1. Statt einer Liste von Flaggen merkt sich `%composite`, welche Zahlen gestrichen wurden.
Eine Zahl, die noch fehlt, wenn sie an der Reihe ist, ist prim.

1. Für jede Primzahl `$i` werden ihre Vielfachen als Folge `$i², $i² + $i ... $limit`
erzeugt und als zusammengesetzt vermerkt. Bei `$i²` zu beginnen überspringt Vielfache, die
kleinere Primzahlen schon erledigt haben.

1. Das ist eine einzelne [Folge](/de/paradigms/lazy/sequence-operator), kein `for`-Kopf im
C-Stil. Der Operator `...` nimmt die ersten beiden Werte, ermittelt die Schrittweite
zwischen ihnen und läuft bis zur Grenze weiter. Für `$i` = `3` heißt das, bei `9` zu
beginnen, dann `12`, die Schrittweite ist also `3`, und die Schleife geht die ganze Liste
durch:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    `for` bekommt also eine Liste zum Durchlaufen — `9, 12, 15, …` — statt dreier getrennter
Klauseln.

1. `$i²` quadriert die Zahl mithilfe einer hochgestellten Unicode-Ziffer. Raku nimmt alle
drei Schreibweisen `$i * $i`, `$i ** 2` und `$i²` an — sie berechnen genau denselben Wert,
wählen Sie also, was sich für Sie am besten liest. Die hochgestellten Ziffern (`²`, `³`, …)
sind gewöhnliche Zeichen, die Sie unmittelbar in den Quelltext tippen oder einfügen können.

{% include nav.html %}
