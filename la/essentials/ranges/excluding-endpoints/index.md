---
title: Excludens terminos intervalli
---

{% include menu.html %}

Ut unum ex marginibus vel utrumque excludas, modifica operatorem creationis intervalli cum charactere `^`. Tres alii operatorii sic construi possunt. Commentarii numeros enumerant quos intervalla generant.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

In simplicibus casibus ut supra demonstratis, potes spatias circa operatorem intervalli omittere:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Pro intervallo quod incipit cum 0, ut `0..^5`, syntaxin compendiariam habet: `^5`.

{% include nav.html %}