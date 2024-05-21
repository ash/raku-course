---
title: Quiz 1 — Funciones múltiples simples
---

{% include menu.html %}

¿Cuáles son las formas correctas de crear una función múltiple?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrecto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Falta el declarador `multi`.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Falta el declarador `sub`, pero eso es aceptable.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correcto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Totalmente perfecto.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrecto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Debería ser `multi` `sub`, no `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrecto | Estas definiciones son&nbsp; (: correctas, incorrectas :) | Las firmas no se pueden distinguir en la distribución múltiple.


{% include quiz.html %}

{% include nav.html %}