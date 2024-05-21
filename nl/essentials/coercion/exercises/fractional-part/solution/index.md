---
title: 'Oplossing: Fractioneel deel'
---

{% include menu.html %}

Om het fractionele deel van een getal te krijgen, kun je het gehele deel aftrekken, dat je kunt krijgen door het getal naar een `Int` te casten.

## Code

De mogelijke oplossing wordt hieronder getoond:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Vind het programma in het bestand [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/fractional-part.raku).

## Uitvoer

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Opmerking

Probeer hetzelfde programma ook met negatieve getallen, bijvoorbeeld:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

In dit geval zou het resultaat ook correct moeten zijn:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}