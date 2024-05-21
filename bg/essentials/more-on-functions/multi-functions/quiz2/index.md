---
title: Тест 2 — Мулти-функции с типизирани параметри
---

{% include menu.html %}

Кои са правилните начини за създаване на мулти-функция?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: правилни, неправилни :) | Типовете на параметрите се различават.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: правилни, неправилни :) | Броят на параметрите се различава.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: правилни, неправилни :) | Вариант с позиционен параметър е допустим.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Тези дефиниции са&nbsp; (: правилни, неправилни :) | Първият вариант улавя всичко освен `Int`.


{% include quiz.html %}

{% include nav.html %}