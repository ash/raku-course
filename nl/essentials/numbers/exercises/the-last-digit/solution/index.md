---
title: 'Oplossing: Het laatste cijfer'
---

{% include menu.html %}

Het idee van de oplossing van deze taak is om modulo deling door 10 te gebruiken om het laatste cijfer van het nummer te krijgen.

## Code

Hier is de oplossing:

```raku
my $n = prompt 'Voer een nummer in: ';
my $d = $n % 10;
say "Het laatste cijfer van $n is $d.";
```

🦋 Vind het programma in het bestand [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/the-last-digit.raku).

## Uitvoer

Voer het programma uit en voer een positief geheel getal in:

```console
$ raku exercises/numbers/the-last-digit.raku
Voer een nummer in: 1234
Het laatste cijfer van 1234 is 4.
```

## Opmerking

Merk op dat dit niet werkt zoals verwacht met negatieve getallen, aangezien bijvoorbeeld `-11 % 10` `9` is, niet `1`.

{% include nav.html %}