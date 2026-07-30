---
title: 'Oplossing: Soort driehoek'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Je kunt de broncode vinden in het bestand [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Uitvoer

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Opmerkingen

1. De `unless`-wacht wijst zijdelengten af die de driehoeksongelijkheid schenden
voordat er ook maar geclassificeerd wordt.

1. Het aantal *verschillende* zijdelengten vertelt de soort: één betekent alle gelijk
(gelijkzijdig), twee betekent precies één paar gelijk (gelijkbenig), drie betekent alle
verschillend (ongelijkzijdig).

1. De lusvariabele als `-> ($a, $b, $c)` destructureren pakt elke binnenste lijst
rechtstreeks in drie benoemde zijden uit.

{% include nav.html %}
