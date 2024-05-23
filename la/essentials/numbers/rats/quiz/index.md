---
title: 'Quiz: Numeri rationales'
---

{% include menu.html %}

Selige numeri qui sunt `Rat` in Raku.

<!--0 | ↉ | Hoc est numerus `Int`, et eius valor est `0`.-->

{:.quiz}
1 | 3/64 | Hoc est numerus `Rat`, non divisio duorum integrorum.
1 | ⅞
1 | 2.718281828459045 | Hoc est valor approximatus constantis Euleri, sed hoc est `Rat` adhuc, quia non est infinite longus.
1 | 10_230/50_245 | Potes uti `_` separator hic quoque.
1 | 10.345_678 | Et hic.
0 | 10.345,678 | Comma hic non est comma decimale nec separator.
1 | <33/44> | Alia forma scribendi numeros rationales in Raku.
0 | <33 44> | Hoc est index chordarum (videbimus id postea in cursu).
0 | &apos;<33 44>&apos; | Hoc est chorda.
1 | ⅞/⅚ | Hoc est divisio duorum numerorum `Rat`, sed eventus est etiam numerus `Rat`.

{% include quiz.html %}

{% include nav.html %}