---
title: 'Lösung: Ein laufender Sammler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Du findest den Quellcode in der Datei [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Ausgabe

```
110
135
130
```

## Kommentare

1. Der gelieferte Block *schließt über* `$total`: Diese Variable lebt zwischen den
Aufrufen weiter, jeder Aufruf erinnert sich also an die Summe des vorigen.

1. `$total += $amount` erneuert die laufende Summe und liefert sie zugleich, und das ist
es, was jedes `say` ausgibt: `110`, dann `135`, dann `130`.

1. Eine Alternative hält die Summe im Block selbst, in einer `state`-Variablen. Anders als
ein gewöhnliches `my` wird eine `state`-Variable nur einmal initialisiert — beim ersten
Lauf des Blocks — und behält ihren Wert dann über spätere Aufrufe hinweg:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Jeder Aufruf von `make-accumulator` erzeugt einen frischen Block mit seinem eigenen
    `state $total`, getrennte Sammler bleiben also unabhängig — und die Closure über
    `$start` versorgt jeden weiterhin mit seinem eigenen Anfangswert.

{% include nav.html %}
