---
title: 'Risinājums: Atrodiet frāzi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Atrodiet programmu failā [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Izvade

```
｢love Raku｣
```

## Komentāri

1. Atstarpe starp vārdiem šeit ir nozīmīga, tāpēc frāze ir ietīta pēdiņās: `'love Raku'`. Bez pēdiņām regulāro izteiksmju dzinējs atstarpi ignorētu un meklētu `loveRaku`, kā virknē nav.

1. Gudrā sakritība atgriež sakritības objektu, kas aptver visu pēdiņās likto frāzi un ko `say` izdrukā stūra iekavās.

{% include nav.html %}
