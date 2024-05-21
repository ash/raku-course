---
title: De uiteinden van een bereik uitsluiten
---

{% include menu.html %}

Om een van de randen of beide uit te sluiten, wijzig je de bereikoperator met het `^`-teken. Er zijn drie extra operators die op deze manier kunnen worden geconstrueerd. De opmerkingen geven de getallen weer die de bereiken genereren.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

In eenvoudige gevallen zoals hierboven getoond, kun je de spaties rond de bereikoperator weglaten:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Voor een bereik dat begint met 0, zoals `0..^5`, bestaat er een verkorte syntaxis: `^5`.

{% include nav.html %}