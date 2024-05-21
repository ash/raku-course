---
title: 'Oplossing: Oneven of even'
---

{% include menu.html %}

Het lichaam van de functie is vrij klein, wat een geldige reden is om zowel de `return` routine als de puntkomma aan het einde van de regel weg te laten.

## Code

Hier is de oplossing:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Vind het programma in het bestand [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/odd-or-even.raku).

## Uitvoer

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}