---
title: 'Risinājums: Kvadrāti'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Atrodiet programmu failā [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Izvade

```
[4 16 36]
```

## Komentāri

1. Nosacījums `if $_ %% 2` izlemj, *vai* ņemt, bet `$_ ** 2` izlemj, *ko* ņemt. Nosacījumu iztur tikai pāra skaitļi `2`, `4`, `6`.

1. To kvadrāti `4`, `16`, `36` ir vienīgās vērtības, kas nodotas `take`, tāpēc `gather` savāc tieši tās. Filtrēšanu un pārveidošanu apvienot vienā `take` ir kaut kas tāds, ko vienkāršs `map` tik tīri izteikt nespēj.

{% include nav.html %}
