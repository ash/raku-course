---
title: Iteratora protokols
translations_gpt:
---

{% include menu.html %}

Katra vērtība, pa kuru var ciklot — saraksts, diapazons, masīvs —, spēj jums pasniegt _iteratoru_ ar metodi `.iterator`. Iteratoram ir viena būtiska metode, `pull-one`, kas katrā izsaukumā atgriež nākamo vērtību:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Kad vērtības beidzas, `pull-one` īsta elementa vietā atgriež īpašu bāku — `IterationEnd`. Prasot tam pašam `$it` vēl vienu vērtību, to var ieraudzīt:

```raku
say $it.pull-one =:= IterationEnd; # True
```

Operators `=:=` pārbauda, vai tas ir **tas pats objekts**, un tieši tā šo bāku atpazīst. Šī detaļa ir svarīga ciklā, kur izvilktā vērtība jāpatur *un* jāpārbauda. Ja jūs to **piešķirat** ar `=`, vērtība nonāk konteinerā un salīdzinājums beigās skatās uz konteineru, nevis uz `IterationEnd`. Zāles ir **saistīt** ar `:=`, lai mainīgais vienkārši *būtu* tas, ko atgriezis `pull-one`:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # saistām, nevis piešķiram
    last if $v =:= IterationEnd;
    say $v;
}
```

Cikls izdrukā `a`, `b`, `c` un tad apstājas. Tieši to zem pārsega jūsu vietā dara `for` cikls: tas izsauc `.iterator` tam, pa ko ciklojat, un turpina izsaukt `pull-one`, līdz sastop `IterationEnd`. Ar rokām to uzrakstīt vajag reti, taču, izdarot to vienreiz, kļūst redzams, ka Raku patiesībā ciklo nevis pa sarakstiem, bet pa iteratoriem.

{% include nav.html %}
