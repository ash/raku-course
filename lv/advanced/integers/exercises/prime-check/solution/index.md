---
title: 'Risinājums: Pirmskaitlis vai nē'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Programmas pirmkodu var atrast failā [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Izvade

```
True
False
```

## Komentāri

1. `97` nav citu dalītāju kā `1` un pats, tāpēc `is-prime` atgriež `True`.

1. `91` izskatās kā pirmskaitlis, bet patiesībā ir `7 × 13`, tāpēc `is-prime` atgriež `False`. Metode veic dalītāju pārbaudi jūsu vietā, un tas ir viss tās jēga.

{% include nav.html %}
