---
title: 'Oplossing: Echo tot genoeg'
---

{% include menu.html %}

Dit programma vereist een lus die wordt gestopt wanneer de gebruiker een vooraf gedefinieerd woord invoert.

## Code

Er zijn verschillende vergelijkbare manieren om de taak op te lossen met `while`, `until`, of `repeat`. Een daarvan wordt hieronder getoond.

```raku
my $word;
repeat {
    $word = prompt 'Jouw woord: ';
    say $word;
} while $word ne 'genoeg';

say 'OK, klaar.';
```

🦋 Vind het programma in het bestand [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/echo-until-enough.raku).

## Uitvoer

Voer het programma uit, voer een paar verschillende woorden in en beëindig vervolgens de lus.

```console
$ raku exercises/loops/echo-until-enough.raku
Jouw woord: dit
dit
Jouw woord: is
is
Jouw woord: mijn
mijn
Jouw woord: woord
woord
Jouw woord: genoeg
genoeg
OK, klaar.
```

## Opmerking

Merk op dat je de variabele `$word` _voor_ de lus declareert, aangezien de `while`-test zich buiten de scope van de lus bevindt. Als de variabele binnen de lus wordt gedefinieerd, zal deze niet zichtbaar zijn in de test.

{% include nav.html %}