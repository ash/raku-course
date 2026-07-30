---
title: 'Oplossing: Maskeer de cijfers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Je kunt de broncode vinden in het bestand [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Uitvoer

```
PIN ####
PIN 1234
```

## Opmerkingen

1. De `S///` met hoofdletter doet hetzelfde werk als `s///` maar **geeft een nieuwe string terug** in plaats van de variabele ter plaatse te wijzigen. Met `:g` vervangt hij in de teruggegeven kopie elk cijfer `\d` door een `#`. Hij wordt met `given` op `$orig` toegepast, wat die string als onderwerp instelt.

1. `$orig` daarna afdrukken laat zien dat die nog steeds `PIN 1234` bevat — anders dan bij `s///` bleef het origineel onaangeroerd.

{% include nav.html %}
