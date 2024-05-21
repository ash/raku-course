---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Kādas ir pareizās metodes, lai izveidotu vairāku funkciju?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Parametru tipi atšķiras.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Parametru skaits atšķiras.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Variants ar tikai pozicionāliem parametriem ir pieņemams.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Pirmais variants uztver visu, izņemot `Int`.


{% include quiz.html %}

{% include nav.html %}