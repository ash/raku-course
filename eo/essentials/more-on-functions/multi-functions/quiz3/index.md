---
title: Kvizo 2 — Multi-funkcioj kun tajpitaj parametroj
---

{% include menu.html %}

Jen la tri variantoj de la funkcio.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Kiuj vokoj estas validaj?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Ne ekzistas `multi sub func(Str $a)`.
1 | func(4.4)

Kion la vokoj redonas?

{:.quiz-select}
1 | `func(4)` redonas&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` redonas&nbsp; (: 1, 2, 3 :) | `4.4` estas `Rat`.
2 | `func(4/4)` redonas&nbsp; (: 1, 2, 3 :) | `4/4` ankaŭ estas `Rat` nombro.
3 | `func(4e4)` redonas&nbsp; (: 1, 2, 3 :) | Nombro en scienca notacio estas `Num`.

{% include quiz.html %}

{% include nav.html %}