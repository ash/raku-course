---
title: Oplossing voor ‘Klasbanken’
---

{% include menu.html %}

De oplossing voor het probleem wordt hieronder getoond.

## Code

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Je kunt de volledige code vinden in het bestand [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Uitvoer

Voer het programma minstens twee keer uit met zowel een oneven als een even aantal studenten. Bijvoorbeeld, voor de invoernummers `23` en `24`, geeft het programma hetzelfde resultaat:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Opmerkingen

Het is niet genoeg om het aantal studenten gewoon door twee te delen. Het is belangrijk om zowel oneven als even aantallen te verwerken. Een van de mogelijke oplossingen om het aantal naar boven af te ronden: `$students div 2 + $students % 2`. Wanneer het aantal studenten even is, is de tweede component nul, en is het resultaat gelijk aan de helft van het aantal studenten. Maar wanneer het aantal studenten oneven is, blijft de eerste component een geheel getal vanwege `div` in plaats van `/`, en voegt de tweede term van de uitdrukking een extra bank toe.

{% include nav.html %}