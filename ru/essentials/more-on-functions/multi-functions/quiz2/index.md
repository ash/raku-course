---
title: Викторина 2 — Многофункции с типизированными параметрами
---

{% include menu.html %}

Какие способы создания многофункций являются правильными?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correct | Эти определения&nbsp; (: правильные, неправильные :) | Типы параметров различаются.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Эти определения&nbsp; (: правильные, неправильные :) | Количество параметров различается.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correct | Эти определения&nbsp; (: правильные, неправильные :) | Вариант с единственным позиционным параметром допустим.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correct | Эти определения&nbsp; (: правильные, неправильные :) | Первый вариант охватывает все, кроме `Int`.


{% include quiz.html %}

{% include nav.html %}