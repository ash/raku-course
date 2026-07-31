---
title: Dato kaj tempo
translations_gpt:
---

{% include menu.html %}

Raku havas enkonstruitajn tipojn por labori kun kalendaraj datoj kaj horloĝaj tempoj. Kalendara dato estas reprezentata de la tipo `Date`. Vi kreas ĝin donante la jaron, la monaton kaj la tagon:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Kiam vi havas daton, vi povas legi ĝiajn partojn:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

La metodo `day-of-week` redonas, sur kiun tagon de la semajno la dato falas, numerita de `1` por lundo ĝis `7` por dimanĉo:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

La 27-a de junio 2026 estas sabato, do la rezulto estas `6`.

La metodo `is-leap-year` raportas, ĉu la dato estas en superjaro:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Por ricevi la hodiaŭan daton, voku `Date.today`. Ni ne montras ĝian eligon ĉi tie, ĉar ĝi dependas de la tago, en kiu vi rulas la programon.

{% include nav.html %}
