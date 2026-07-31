---
title: Kopas, somas un maisījumi
translations_gpt:
---

{% include menu.html %}

Bez masīviem un jaukteņiem Raku piedāvā dažus specializētus konteinerus vērtību kolekcijām. Vienkāršākā ir `Set` — nesakārtota _atšķirīgu_ vērtību kolekcija, kurā katra vērtība vai nu ir loceklis, vai nav, un dublikāti tiek ignorēti.

Kopu izveido ar rutīnu `set`. Atkārtotas vērtības saplūst vienā:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Lai gan tika padoti pieci skaitļi, kopā ir tikai trīs elementi, jo `1` un `2` parādījās vairāk nekā vienu reizi.

Galvenais jautājums, ko kopai uzdodat, ir tas, vai vērtība tai pieder. Operators `∈` (lasāms kā «ir elements no») atgriež Būla vērtību:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Ja labprātāk paliekat pie tīra ASCII, to pašu operatoru var rakstīt kā `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

Nākamie temati parāda, kā kopas apvienot, un iepazīstina ar maisiem un maisījumiem, kas ir kopas tuvi radinieki.

{% include nav.html %}
