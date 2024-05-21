---
title: 'Oplossing: Als het getal binnen de grenzen valt'
---

{% include menu.html %}

Het programma gebruikt een bereik dat wordt gecreëerd uit de getallen die de gebruiker invoert. Vervolgens test de smartmatch-controle of het derde getal binnen de grenzen van het bereik valt. Het resultaat van de smartmatch-test is een Booleaanse waarde, dus we kunnen het direct afdrukken.

## Code

Hier is de oplossing:

```raku
my $begin = prompt 'Van (inclusief): ';
my $end = prompt 'Tot (exclusief): ';

my $n = prompt 'Wat is het getal? ';

say $n ~~ $begin ..^ $end;
```

🦋 Vind het programma in het bestand [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/ranges/number-in-limits.raku).

## Uitvoer

Test verschillende gevallen, inclusief wanneer het getal samenvalt met het einde van het bereik.

```console
$ raku exercises/ranges/number-in-limits.raku
Van (inclusief): 1
Tot (exclusief): 2
Wat is het getal? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
Van (inclusief): 100
Tot (exclusief): 200
Wat is het getal? 100
True

$ raku exercises/ranges/number-in-limits.raku
Van (inclusief): -5
Tot (exclusief): -2
Wat is het getal? -2
False
```

## Opmerking

Let op hoe het rechtereindpunt van het bereik is uitgesloten: `$begin ..^ $end`.

{% include nav.html %}