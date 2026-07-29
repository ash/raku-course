---
title: Тест 3 — Виклик мульти-функцій
---

{% include menu.html %}

Ось три варіанти функції.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Які виклики допустимі?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Немає варіанта `multi sub func(Str $a`).
1 | func(4.4)

Що повертають ці виклики?

{:.quiz-select}
1 | `func(4)` повертає&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` повертає&nbsp; (: 1, 2, 3 :) | `4.4` — це `Rat`.
2 | `func(4/4)` повертає&nbsp; (: 1, 2, 3 :) | `4/4` — теж число `Rat`.
3 | `func(4e4)` повертає&nbsp; (: 1, 2, 3 :) | Число в науковій нотації — це `Num`.

{% include quiz.html %}

{% include nav.html %}
