---
title: Тест 2 — Мульти-функції з типізованими параметрами
---

{% include menu.html %}

Які способи створення мульти-функції правильні?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
правильні | Ці визначення&nbsp; (: правильні, неправильні :) | Типи параметрів різні.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
правильні | Ці визначення&nbsp; (: правильні, неправильні :) | Кількість параметрів різна.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
правильні | Ці визначення&nbsp; (: правильні, неправильні :) | Варіант лише з позиційним параметром цілком годиться.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
правильні | Ці визначення&nbsp; (: правильні, неправильні :) | Перший варіант ловить усе, крім `Int`.


{% include quiz.html %}

{% include nav.html %}
