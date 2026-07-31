---
title: 'Risinājums: Saskaitiet sakritības'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Atrodiet programmu failā [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Izvade

```
5
```

## Komentāri

1. Rakstzīmju klase `<[aeiou]>` piemeklē vienu patskani, un apstākļvārds `:g` atgriež katru tādu sakritību, nevis tikai pirmo.

1. Rezultāts uzvedas kā saraksts, tāpēc `.elems` sakritības saskaita: piecus patskaņus vārdā `education` (e, u, a, i, o).

{% include nav.html %}
