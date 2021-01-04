---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Here are the three variants of the function.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Which calls are valid?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | There is no `func(Str $a`).
1 | func(4.4)

What do the calls return?

{:.quiz-select}
1 | `func(4)` returns&nbsp;(: 1, 2, 3 :)
2 | `func(4.4)` returns&nbsp;(: 1, 2, 3 :) | `4.4` is a `Rat`.
2 | `func(4/4)` returns&nbsp;(: 1, 2, 3 :) | `4/4` is also a `Rat` number.
3 | `func(4e4)` returns&nbsp;(: 1, 2, 3 :) | A number in scientific notation is `Num`.

{% include quiz.html %}

{% include nav.html %}
