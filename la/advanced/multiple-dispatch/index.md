---
title: Multiplex dispatch
translations_gpt:
---

{% include menu.html %}

In parte Essentialia occurristi [_multi-functionibus_](/la/essentials/more-on-functions/multi-functions): pluribus subroutinis quae nomen commune habent, ubi Raku rectam eligit inspiciendo genera argumentorum. Hic mechanismus _multiplex dispatium_ vocatur.

Hactenus, electio ex _genere_ argumentorum facta est. Clausula `where` te longius ire sinit et ex _valore_ quoque dispatchere. Post parametrum scribitur et condicionem continet quam argumentum satisfacere debet ut ille candidatus eligatur:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Quaeque vocatio ad candidatum it cuius condicio vera est pro dato valore:

```
-5 is negative
0 is zero
7 is positive
```

Omnes tres candidati eandem signaturam habent quantum ad genera pertinet — unum `Int` — itaque sine clausulis `where` inter se confligerent. Condiciones eos distinctos faciunt.

## Casus basis pro recursione

Usus communis clausulae `where` est ut punctum sistendi recursionis ut candidatum separatum praebeat. Hic est factorialis iterum, in duos multi-subs divisus:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

Primus candidatus casum basem tractat (`$n` valoris `1` vel minoris) et simpliciter `1` reddit. Omnis alius valor ad secundum candidatum it, qui `fact` iterum cum numero minore vocat. Nullum `if` intra functionem est — electio inter casum basem et gradum recursivum a dispatchore fit.

{% include nav.html %}
