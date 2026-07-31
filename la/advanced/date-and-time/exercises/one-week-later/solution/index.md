---
title: 'Solutio: Una septimana postea'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Inveni codicem fontem in archivo [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Exitus

```
2027-03-07
7
```

## Commentarii

1. `later(:days(7))` diem septem diebus promovet — unam hebdomadem. Potuissemus etiam `+ 7` scribere, sed argumentum nominatum unitatem explicite declarat.

1. Februarius MMXXVII habet 28 dies, ergo hebdomas post vicesimum octavum diem automatice in Martium transit: resultatum est `2027-03-07`.

1. Vocando `day-of-week` in novo die dat `7`. Hoc resultatum facile probatur: dies exacte unam hebdomadem posterior in *eundem* diem hebdomadis cadere debet ac dies originalis, et `2027-02-28` est dies Solis (`7`) quoque — ergo `7` hic est responsum quod exspectas.

{% include nav.html %}
