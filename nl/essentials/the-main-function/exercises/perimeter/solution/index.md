---
title: 'Solution: Omtrek van een rechthoek'
---

{% include menu.html %}

Dit programma moet in staat zijn om één of twee command-line argumenten te accepteren. Een nieuwe truc wordt hier in de oplossing getoond. De standaardwaarde van de tweede variabele wordt ingesteld op de waarde van de eerste variabele: `sub MAIN($a, $b = $a)`. Dus, in plaats van het creëren van twee multi-functies, hebben we een algemene functie die de grootte van de tweede zijde instelt als de figuur een vierkant is.

## Code

Hier is de oplossing:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'vierkant' !! 'rechthoek';
    say "De omtrek van een $shape is $perimeter.";
}
```

🦋 Vind het programma in het bestand [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/perimeter.raku).

## Output

Probeer verschillende invoerwaarden om zowel vierkanten als rechthoeken te testen.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
De omtrek van een vierkant is 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
De omtrek van een rechthoek is 6.
```

Merk op dat er een derde geval is dat ook getest moet worden. Als twee gelijke getallen worden doorgegeven, moet het programma nog steeds begrijpen dat dit een vierkant was:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
De omtrek van een vierkant is 8.
```

{% include nav.html %}