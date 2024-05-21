---
title: 'Oplossing: Deling via aftrekking'
---

{% include menu.html %}

De deling is herhaalde aftrekking. Het programma heeft een `while`-lus die `$a` vermindert met de waarde van `$b` en dit herhaalt zolang de huidige waarde van `$a` niet kleiner is dan `$b`. De variabele `$n` telt het aantal iteraties, en dit is ook het resultaat dat we nodig hebben.

## Code

Hier is het volledige programma:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Vind het programma in het bestand [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/division-via-subtraction.raku).

## Uitvoer

Voer het programma een paar keer uit. Begin met de gegeven waarden die een exact geheel getal geven:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Probeer ook bijvoorbeeld om `$b` te veranderen naar `20` en bevestig dat het resultaat correct is:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}