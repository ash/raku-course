---
title: Ligzdošanas hash
---

{% include menu.html %}

Ligzdošanas hash izveidošana ir līdzīga [ligzdošanas masīvu](/lv/essentials/positionals/nested-arrays) izveidošanai. Izmantojiet figūriekavas, lai iekļautu iekšējos hash.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Ņemiet vērā, ka beigu komats ir derīgs sintakses elements:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Komata izmantošana palīdz, ja rediģējat struktūru, kopējot un ielīmējot rindas.

Lai iegūtu elementus no iekšējiem hash, izmantojiet divas atslēgas vienu pēc otras.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}