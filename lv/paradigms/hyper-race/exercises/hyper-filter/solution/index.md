---
title: 'Risinājums: hyper ar filtru'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Atrodiet programmu failā [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Izvade

```
(121 144 169 196 225 256 289 324 361 400)
```

## Komentāri

1. `*²` ir tikai Raku augšraksta pieraksts izteiksmei `* ** 2`: `²` ir postfiksais pakāpes operators, tāpēc `*²` ir `WhateverCode`, kas savu argumentu kāpina kvadrātā. Rakstiet `* ** 2`, ja tā patīk labāk.

1. `.hyper` paralelizē visu ķēdi — `grep`, kas patur skaitļus virs `10`, un `map`, kas tos kāpina kvadrātā —, saglabājot secību.

1. Tā kā secība tiek saglabāta, kvadrāti atgriežas tādā pašā kārtībā kā to ievaddati (`11²`, `12²`, …, `20²`), dodot `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
