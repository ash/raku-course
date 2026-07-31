---
title: 'Risinājums: Summa ar race'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Atrodiet programmu failā [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Izvade

```
22100
```

## Komentāri

1. `.race` visu ķēdi — katra skaitļa kāpināšanu kvadrātā un pāra kvadrātu filtrēšanu — izpilda paralēli un, atšķirībā no `.hyper`, nesola atgriezt elementus secībā.

1. Šeit tas nekaitē, jo pēdējais solis ir summa, kas nav atkarīga no secības: pāra kvadrāti (`2²`, `4²`, …, `50²`) saskaitās par `22100` neatkarīgi no tā, kādā kārtībā tie pienāk. Kad jūs rezultātus tikai apvienojat (summa, skaits), `.race` ir dabiskā izvēle un var nest mazliet mazākas pieskaitāmās izmaksas nekā `.hyper`.

{% include nav.html %}
