---
title: Datums un laiks
translations_gpt:
---

{% include menu.html %}

Raku ir iebūvēti tipi darbam ar kalendāra datumiem un pulksteņa laikiem. Kalendāra datumu attēlo tips `Date`. To izveido, norādot gadu, mēnesi un dienu:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Kad datums ir iegūts, var nolasīt tā daļas:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

Metode `day-of-week` atgriež, uz kuru nedēļas dienu datums krīt, numurējot no `1` par pirmdienu līdz `7` par svētdienu:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

2026. gada 27. jūnijs ir sestdiena, tāpēc rezultāts ir `6`.

Metode `is-leap-year` pasaka, vai datums ir garajā gadā:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Lai iegūtu šodienas datumu, izsauciet `Date.today`. Tā izvadi šeit nerādām, jo tā ir atkarīga no dienas, kurā programmu palaižat.

{% include nav.html %}
