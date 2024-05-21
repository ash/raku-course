---
title: Тест 2 — Многофункции с типизирани параметри
---

{% include menu.html %}

Ето трите варианта на функцията.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Кои извиквания са валидни?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Няма `multi sub func(Str $a`).
1 | func(4.4)

Какво връщат извикванията?

{:.quiz-select}
1 | `func(4)` връща&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` връща&nbsp; (: 1, 2, 3 :) | `4.4` е `Rat`.
2 | `func(4/4)` връща&nbsp; (: 1, 2, 3 :) | `4/4` също е `Rat` число.
3 | `func(4e4)` връща&nbsp; (: 1, 2, 3 :) | Число в научна нотация е `Num`.

{% include quiz.html %}

{% include nav.html %}