---
title: 'Risinājums: Atvērts diapazons'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (2, 4 ... *).head(4);
```

🦋 Atrodiet programmu failā [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Izvade

```
(2 4 6 8)
```

## Komentāri

1. Sākumvērtības `2, 4` nosaka aritmētisko soli divi, un kailā `*` kā beigu punkts nozīmē, ka virkne nekad nebeidzas.

1. `head(4)` izvelk tikai pirmās četras vērtības — `2, 4, 6, 8`. Virkne ir slinka, tāpēc bezgalīgā aste nekad netiek aprēķināta; kailā zvaigznīte šeit nozīmē «cik nu ir, bez augšējās robežas».

{% include nav.html %}
