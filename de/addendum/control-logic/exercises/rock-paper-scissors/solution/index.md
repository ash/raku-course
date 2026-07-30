---
title: 'Lösung: Schere, Stein, Papier'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %beats = rock => 'scissors', scissors => 'paper', paper => 'rock';

sub winner($a, $b) {
    return 'tie' if $a eq $b;
    return %beats{$a} eq $b ?? "$a wins" !! "$b wins";
}

for <rock scissors>, <paper rock>, <paper paper> -> ($a, $b) {
    say "$a vs $b: { winner($a, $b) }";
}
```

🦋 Du findest den Quellcode in der Datei [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Ausgabe

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Kommentare

1. Der Hash `%beats` verschlüsselt die Regeln: Jeder Zug wird auf den Zug abgebildet, den
er schlägt. Damit wird das Bewerten zu einem einzigen Nachschlagen statt zu einer langen
Kette von Bedingungen.

1. Ist `%beats{$a}` der Zug des Gegners, gewinnt `$a`; sonst gewinnt `$b` (gleiche Züge
sind bereits abgehandelt).

{% include nav.html %}
