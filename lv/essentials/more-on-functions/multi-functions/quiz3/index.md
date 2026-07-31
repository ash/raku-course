---
title: Tests 3 — Daudzfunkciju izsaukšana
---

{% include menu.html %}

Lūk, trīs funkcijas varianti.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Kuri izsaukumi ir derīgi?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Nav neviena `multi sub func(Str $a`).
1 | func(4.4)

Ko izsaukumi atgriež?

{:.quiz-select}
1 | `func(4)` atgriež&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` atgriež&nbsp; (: 1, 2, 3 :) | `4.4` ir `Rat`.
2 | `func(4/4)` atgriež&nbsp; (: 1, 2, 3 :) | Arī `4/4` ir `Rat` skaitlis.
3 | `func(4e4)` atgriež&nbsp; (: 1, 2, 3 :) | Skaitlis zinātniskajā pierakstā ir `Num`.

{% include quiz.html %}

{% include nav.html %}