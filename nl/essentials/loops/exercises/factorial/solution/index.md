---
title: Oplossing van ‘Faculteit’
---

{% include menu.html %}

Een faculteit van `N` is een product van gehele getallen van 1 tot en met `N`. Bijvoorbeeld, de faculteit van 4 is 1 * 2 * 3 * 4 = 24.

## Code

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Vind het programma in het bestand [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/factorial.raku).

## Uitvoer

Voer het programma een paar keer uit en probeer verschillende waarden van `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Opmerkingen

Dit programma gebruikt de `*=` operator, wat een snelkoppeling is voor vermenigvuldiging met toewijzing: `$x *= $y` is equivalent aan `$x = $x * $y`.

Je kunt een ‘volledige’ lus gebruiken in plaats van een postfix-vorm:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Meer over dit onderwerp

We zullen meerdere keren terugkomen op deze taak. In dit deel van de cursus zullen we dit probleem ook recursief oplossen.

In het tweede deel van de cursus zullen we leren over de zogenaamde reductie-operators, die de oplossing triviaal maken. Ook zal er een manier zijn om een aangepaste operator `!` te definiëren zodat je `$n!` kunt schrijven om een faculteit te berekenen. Ten slotte zal er een andere kans zijn om een interessante oplossing te zien wanneer we het over de `where` clausule hebben.

{% include nav.html %}