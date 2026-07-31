---
title: Zip-metaoperatoroj
translations_gpt:
---

{% include menu.html %}

La zipa meta-operatoro `Z` prenas du (aŭ pli) listojn kaj kunigas iliajn elementojn laŭ pozicio:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

La rezulto estas listo de grupoj: la unua elemento de ĉiu listo kune, poste la dua de ĉiu, kaj tiel plu.

Pli inventeme, vi povas kombini `Z` kun operatoro por agi sur ĉiun paron. Ekzemple, `Z+` adicias la elementojn pozicio post pozicio:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Tio estas la zipa meta-operatoro ĉirkaŭanta la operatoron `+`: ĝi kalkulas `1 + 10`, `2 + 20`, kaj `3 + 30`. Same, `Z*` multobligas respondajn elementojn:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

Kaj `Z~` kunĉenas respondajn ĉenojn:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
