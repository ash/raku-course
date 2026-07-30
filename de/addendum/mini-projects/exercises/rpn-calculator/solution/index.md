---
title: 'Lösung: Ein Rechner in umgekehrter polnischer Notation'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $expression = '3 4 + 5 *';
my @stack;

for $expression.words -> $token {
    if $token ~~ / ^ \d+ $ / {
        @stack.push($token.Int);
    }
    else {
        my $b = @stack.pop;
        my $a = @stack.pop;
        @stack.push( do given $token {
            when '+' { $a + $b }
            when '-' { $a - $b }
            when '*' { $a * $b }
            when '/' { $a / $b }
        });
    }
}

say @stack[0];
```

🦋 Du findest den Quellcode in der Datei [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Ausgabe

```
35
```

## Kommentare

1. Zahlen werden auf einen Stapel gepusht. Ein Operator poppt die beiden jüngsten Werte,
verbindet sie und pusht das Ergebnis zurück — das Wesen der postfixen Auswertung.

1. `do given $token` verwandelt den Operator in die richtige Rechenart, und die Reihenfolge
`$a`, dann `$b` (umgekehrt gepoppt) hält Subtraktion und Division herum, wie es sein soll.

{% include nav.html %}
