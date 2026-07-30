---
title: 'Oplossing: Tel op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Je kunt de broncode vinden in het bestand [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Uitvoer

```
1
2
3
```

## Opmerkingen

1. Het basisgeval `return if $n < 1` stopt de recursie nog steeds zodra de telling voorbij nul komt.

1. De volgorde van de laatste twee regels is wat het *op*tellen mogelijk maakt: elke aanroep daalt eerst helemaal af tot het basisgeval en drukt pas daarna zijn eigen getal af, terwijl de aanroepen zich afwikkelen. Dus `1` wordt als eerste afgedrukt en `$n` als laatste.

{% include nav.html %}
