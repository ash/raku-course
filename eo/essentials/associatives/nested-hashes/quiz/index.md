---
title: Kvizo — Plurnivelaj haketoj
---

{% include menu.html %}

Por la donita datuma strukturo:

```raku
my %statistics =
    1900 => {
        Jan => 500,
        Feb => 550,
    },
    2000 => {
        Jan => 1230,
        Feb => 1245,
    };
```

Elektu la liniojn kiuj provizas ĝustan aliron al la datuma ero por februaro de 1900.

{:.quiz}
1 | say %statistics<1900>&lt;Feb&gt;;
1 | say %statistics{1900}&lt;Feb&gt;; | Ĉi tio estas ĝusta, ĉar `1900` povas esti implicite konvertita al ĉeno.
0 | say %statistics{1900}{Feb}; | Malĝusta, ĉar `Feb` devas esti ĉeno.
1 | say %statistics{&apos;1900&apos;}{&apos;Feb&apos;};

{% include quiz.html %}

{% include nav.html %}