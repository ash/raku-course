---
title: 'Solvo: Unu semajnon poste'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Vi povas trovi la fontkodon en la dosiero [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Eligo

```
2027-03-07
7
```

## Komentoj

1. `later(:days(7))` movas la daton antaŭen je sep tagoj — unu semajno. Ni ankaŭ povus skribi `+ 7`, sed la nomita argumento eksplicite deklaras la unuon.

1. Februaro 2027 havas 28 tagojn, do semajno post la 28-a aŭtomate transiras en marton: la rezulto estas `2027-03-07`.

1. Voki `day-of-week` sur la nova dato donas `7`. Tio faciligas kontroli la rezulton: dato ekzakte unu semajnon poste devas fali sur la *saman* semajntagon kiel la originala, kaj `2027-02-28` ankaŭ estas dimanĉo (`7`) — do `7` ĉi tie estas la respondo, kiun vi atendas.

{% include nav.html %}
