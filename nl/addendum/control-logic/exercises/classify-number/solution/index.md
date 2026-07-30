---
title: 'Oplossing: Teken en pariteit'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Je kunt de broncode vinden in het bestand [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Uitvoer

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Opmerkingen

1. Het teken wordt met een *geketende* ternaire uitdrukking gekozen: `negative` wanneer onder nul,
anders `zero` wanneer gelijk, anders `positive`.

1. `$n %% 2` test deelbaarheid door twee, dus is het waar voor even getallen en onwaar
voor oneven. (`0` telt als even.)

{% include nav.html %}
