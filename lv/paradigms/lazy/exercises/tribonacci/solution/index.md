---
title: 'Risinājums: Tribonači virkne'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Atrodiet programmu failā [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Izvade

```
(1 1 1 3 5 9 17 31)
```

## Komentāri

1. Slēgums `* + * + *` saskaita trīs iepriekšējos elementus, lai iegūtu nākamo, tāpēc vajadzīgas trīs sākuma vērtības.

1. Virkne ir slinka, tāpēc, glabājot to `@trib` un prasot `@trib[^8]`, tiek aprēķināti tikai pirmie astoņi skaitļi.

{% include nav.html %}
