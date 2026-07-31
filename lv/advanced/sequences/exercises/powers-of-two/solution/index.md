---
title: 'Risinājums: Divnieka pakāpes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 Atrodiet programmu failā [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Izvade

```
(1 2 4 8 16 32 64 128)
```

## Komentāri

1. Trīs sākuma vērtības `1, 2, 4` aug reizinoties, tāpēc `...` atpazīst ģeometrisku virkni; ar `Inf` kā beigu punktu tā pati no sevis nekad neapstājas.

1. `head(8)` izvelk tikai pirmās astoņas vērtības. Tā kā virkne ir slinka, pārējās nekad netiek ģenerētas — un tas ir vienīgais iemesls, kāpēc bezgalīgu virkni ir droši rakstīt.

{% include nav.html %}
