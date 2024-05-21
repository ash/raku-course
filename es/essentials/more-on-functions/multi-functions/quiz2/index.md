---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

¿Cuáles son las formas correctas de crear una multi-función?

## 1

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Num $b) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Los tipos de parámetros difieren.

## 2

```raku
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | El número de parámetros difiere.

## 3

```raku
multi sub func($a) {. . .}
multi sub func(Int $a, Int $b) {. . .}
multi sub func(Int $a, Int $b, Int $c) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Una variante con parámetro solo posicional está bien.

## 4

```raku
multi sub func($a) {. . .}
multi sub func(Int $a) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | La primera variante captura todo excepto `Int`.


{% include quiz.html %}

{% include nav.html %}