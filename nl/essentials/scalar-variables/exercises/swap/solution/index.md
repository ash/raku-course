---
title: Oplossing van 'Wissel de waarden'
---

{% include menu.html %}

In dit programma gebruiken we de elementen van de Raku-syntaxis uit de sectie over [scalair variabelen](/nl/essentials/scalar-variables).

## Code

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Je kunt de broncode vinden in het bestand [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Uitvoer

Voer het programma uit en bevestig dat het de waarden in een andere volgorde afdrukt.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Opmerkingen

Alle stappen van dit programma (het creëren van een variabele en het toewijzen van de waarden, het wisselen ervan, en het afdrukken) gebruiken beide variabelen in dezelfde constructie. Het meest interessante hier is de manier waarop de variabelen hun waarden uitwisselen:

```raku
($a, $b) = $b, $a;
```

Let op dat je haakjes nodig hebt aan de linkerkant, maar je kunt ze ook toevoegen aan de rechterkant:

```raku
($a, $b) = ($b, $a);
```

Wat gebeurt er als je de haakjes weglaat?

```raku
$a, $b = $b, $a;
```

In dit geval krijg je een waarschuwing dat `$a` aan de rechterkant niet wordt gebruikt:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

De bovenstaande regel is eigenlijk gelijk aan een nutteloze toewijzing `$b = $b`. Je kunt dit gemakkelijk zien als je de waarden aan de rechterkant wijzigt, bijvoorbeeld:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Dit programma geeft nog meer waarschuwingen, maar je kunt ook zien dat alleen `$b` zijn waarde heeft veranderd:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}