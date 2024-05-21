---
title: Викторина 2 — Многофункции с типизированными параметрами
---

{% include menu.html %}

Вот три варианта функции.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Какие вызовы являются допустимыми?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Нет `multi sub func(Str $a)`.
1 | func(4.4)

Что возвращают вызовы?

{:.quiz-select}
1 | `func(4)` возвращает&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` возвращает&nbsp; (: 1, 2, 3 :) | `4.4` является `Rat`.
2 | `func(4/4)` возвращает&nbsp; (: 1, 2, 3 :) | `4/4` также является числом `Rat`.
3 | `func(4e4)` возвращает&nbsp; (: 1, 2, 3 :) | Число в научной нотации является `Num`.

{% include quiz.html %}

{% include nav.html %}