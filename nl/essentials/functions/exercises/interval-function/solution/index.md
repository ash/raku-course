---
title: 'Oplossing: Intervalfunctie'
---

{% include menu.html %}

In deze functie wordt een `if`-constructie met drie vertakkingen gebruikt. De eerste twee vertakkingen hebben een Booleaanse test, maar de derde controle is niet nodig omdat dit de enige overgebleven optie is als het getal niet aan een van de eerste twee tests voldoet.

## Code

Hier is de oplossing:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Vind het programma in het bestand [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Uitvoer

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}