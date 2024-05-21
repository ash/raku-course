---
title: 'Oplossing: Faculteit met multi-functies'
---

{% include menu.html %}

Deze oefening gaat weer over faculteiten. Inderdaad, de taak stelt ons in staat om meer functies van Raku te illustreren.

Bij het berekenen van een faculteit door te beginnen vanaf het gegeven getal en naar beneden te gaan, moet je stoppen wanneer het getal 1 wordt. Met multi-functies kun je dat bereiken door het geval met `$n == 1` naar een aparte multi-functie te extraheren.

## Code

Hier is de oplossing:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Vind het programma in het bestand [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Uitvoer

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Opmerking

Merk op dat het invoerargument expliciet wordt omgezet naar een integer: `@*ARGS[0].Int`. Dit is om een oneindige lus te voorkomen wanneer het invoernummer `1` is. In dit geval is het type parameter dat aan de `factorial` functie wordt doorgegeven een [`IntStr`](/nl/essentials/typed-variables/allomorphs), en de eerste multi-variant kan de oproep niet opvangen. Daarentegen, wanneer `factorial(2 - 1)` recursief wordt aangeroepen, is het argument van de functie een integer, wat het mogelijk maakt om de eerste variant aan te roepen.

{% include nav.html %}