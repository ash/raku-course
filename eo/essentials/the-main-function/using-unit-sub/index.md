---
title: Uzante unit sub
---

{% include menu.html %}

La `unit sub` konstruo estas oportuna maniero fari la reston de la dosiero la korpo de la funkcio! Kiam uzata kun `MAIN`, ĝi permesas forigi la krampojn kiuj ĉirkaŭas preskaŭ la tutan dosieron, same kiel nenecesan enmeton.

La uzo de `unit sub` estas montrita en la sekva ekzemplo de programo.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "La sumo de $a kaj $b estas $sum.";
```

La `MAIN` funkcio estas la sola funkcio en ĉi tiu dosiero. Se ĉi tio estas la kazo por via programo ankaŭ, konsideru uzi `unit sub MAIN` kiel montrite supre.

{% include nav.html %}