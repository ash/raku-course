---
title: 'Lösung: Größter gemeinsamer Teiler und kleinstes gemeinsames Vielfaches'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Du findest den Quellcode in der Datei [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Ausgabe

```
gcd = 12
lcm = 72
```

## Kommentare

1. `gcd` ist ein eingebauter Infixoperator, `$a gcd $b` gibt also unmittelbar den größten
gemeinsamen Teiler.

1. Das kleinste gemeinsame Vielfache ist das Produkt der beiden Zahlen geteilt durch ihren
größten gemeinsamen Teiler — berechnet in der Interpolation `{ ... }` mit der
Ganzzahldivision `div`.

{% include nav.html %}
