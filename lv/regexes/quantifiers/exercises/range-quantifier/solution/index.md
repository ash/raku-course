---
title: 'Risinājums: No diviem līdz četriem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Atrodiet programmu failā [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Izvade

```
｢abcd｣
```

## Komentāri

1. `\w ** 2..4` piemeklē no divām līdz četrām vārda rakstzīmēm.

1. Būdams rijīgs, tas paņem tik, cik diapazons atļauj, — četras —, tāpēc sakritība ir `abcd`.

{% include nav.html %}
