---
title: 'Risinājums: Trijnieka pakāpes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Atrodiet programmu failā [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Izvade

```
(1 3 9 27 81)
```

## Komentāri

1. Slēgums `* * 3` ir nākamā locekļa likums: paņem pašreizējo un reizini ar trīs. Likumu norādīt tieši ir drošāk, nekā ļaut operatoram to uzminēt no pirmajiem locekļiem.

1. Galapunkts `*` padara rindu bezgalīgu, un `.head(5)` paņem pirmās piecas.

{% include nav.html %}
