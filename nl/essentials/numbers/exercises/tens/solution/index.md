---
title: Oplossing voor ‘Aantal tientallen’
---

{% include menu.html %}

Dit is hoe je de taak kunt oplossen.

## Code

```raku
my $n = prompt 'Voer een positief geheel getal in: ';

say ($n % 100) div 10;
```

🦋 Je kunt de volledige code vinden in het bestand [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Uitvoer

Voer het programma uit en test een paar verschillende gevallen:

* Een driecijferig rond getal zoals 120;
* Een veelvoud van 100, bijvoorbeeld 400;
* Een getal dat groter is dan 10 maar kleiner dan 100.
* Een getal kleiner dan 10.

Voor het getal 234 ziet de uitvoer van het programma er als volgt uit:

```console
$ raku exercises/numbers/tens.raku
Voer een positief geheel getal in: 234
3
```

## Opmerkingen

In deze oplossing wordt opnieuw de combinatie van de modulo `%` en gehele deling `div` gebruikt.

Let op de spatie voor de openingshaak. Die moet er zijn; anders krijg je een syntaxisfout. We zullen terugkomen op [dit aspect](/nl/essentials/more-on-functions/mind-the-space) van Raku in de sectie over functies, maar voor nu, typ de code zoals hierboven weergegeven of voeg een ander paar haakjes toe om het argument van de functie te omringen — in dit geval is geen spatie nodig:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}