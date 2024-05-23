---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Hic sunt tres variantes functionis.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Quae vocationes sunt validae?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func('4') | Non est `multi sub func(Str $a)`.
1 | func(4.4)

Quid vocationes reddunt?

{:.quiz-select}
1 | `func(4)` reddit&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` reddit&nbsp; (: 1, 2, 3 :) | `4.4` est `Rat`.
2 | `func(4/4)` reddit&nbsp; (: 1, 2, 3 :) | `4/4` etiam est numerus `Rat`.
3 | `func(4e4)` reddit&nbsp; (: 1, 2, 3 :) | Numerus in notatione scientifica est `Num`.

{% include quiz.html %}

{% include nav.html %}