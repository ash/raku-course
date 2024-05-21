---
title: Oplossing van ‘Meervoudsuitgang’
---

{% include menu.html %}

Het programma moet controleren of het ingevoerde getal groter is dan één en het in de meervoudsvorm plaatsen.

## Code

```raku
my $n = prompt 'Hoeveel bestanden moeten worden gekopieerd? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n bestand{$ending} gekopieerd.";
```

🦋 Vind het programma in het bestand [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Uitvoer

Voer het programma minstens twee keer uit en test het met de invoer `1` en met een ander positief geheel getal:

```console
$ raku exercises/conditional-checks/plural-ending.raku
Hoeveel bestanden moeten worden gekopieerd? 10
10 bestanden gekopieerd.

$ raku exercises/conditional-checks/plural-ending.raku
Hoeveel bestanden moeten worden gekopieerd? 1
1 bestand gekopieerd.
```

## Opmerking

Je hebt waarschijnlijk de neiging om per ongeluk een enkele `?` in plaats van een dubbele `??` en/of een dubbele punt `:` in plaats van `!!` te typen.

{% include nav.html %}