---
title: 'Risinājums: Nedēļas diena'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Atrodiet programmu failā [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Izvade

```
True
```

## Komentāri

1. `day-of-week` numurē dienas no `1` (pirmdiena) līdz `7` (svētdiena), tāpēc abas nedēļas nogales dienas ir tieši skaitļi `6` un `7`.

1. Pārbaude `>= 6` ir `True` gan sestdienai, gan svētdienai un `False` jebkurai darbdienai. 2027. gada 14. februāris ir svētdiena (`7`), tāpēc programma izdrukā `True`.

{% include nav.html %}
