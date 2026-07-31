---
title: 'Risinājums: Darba dienu numuri'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Atrodiet programmu failā [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Izvade

```
Fri
Mon
```

## Komentāri

1. Rakstot konstantes kā pārus, skaitļus varat izvēlēties pats — šeit sākot no `1`.

1. Izsaucot uzskaitījuma tipu kā `Day(5)`, tiek veikta apgrieztā uzmeklēšana: tiek atrasta konstante, kuras vērtība ir `5`, proti, `Fri`. Tāpat `Day(1)` dod `Mon`. Šis ir apgrieztais gadījums izteiksmei `Fri.value`, kas ietu no nosaukuma uz skaitli.

{% include nav.html %}
