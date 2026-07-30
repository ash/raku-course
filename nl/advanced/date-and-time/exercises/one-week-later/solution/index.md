---
title: 'Solution: Een week later'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Je kunt de broncode vinden in het bestand [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Uitvoer

```
2027-03-07
7
```

## Opmerkingen

1. `later(:days(7))` verschuift de datum zeven dagen vooruit — een week. We hadden ook `+ 7` kunnen schrijven, maar het benoemde argument geeft de eenheid expliciet aan.

1. Februari 2027 heeft 28 dagen, dus een week na de 28e gaat automatisch over naar maart: het resultaat is `2027-03-07`.

1. Het aanroepen van `day-of-week` op de nieuwe datum geeft `7`. Dit maakt het resultaat makkelijk te controleren: een datum precies een week later moet op *dezelfde* weekdag vallen als het origineel, en `2027-02-28` is een zondag (`7`) — dus een `7` hier is het antwoord dat je verwacht.

{% include nav.html %}
