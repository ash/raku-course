---
title: Quiz — Funciones con valores predeterminados
---

{% include menu.html %}

¿Cuál es el resultado de llamar a la siguiente función con diferentes argumentos?

```raku
sub f($a, $b = 4, $c = 5) {
    $a + $b + $c
}
```

{:.quiz-select}
10 | `f(1)` devuelve&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
8 | `f(1, 2)` devuelve&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
6 | `f(1, 2, 3)` devuelve&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)

{% include quiz.html %}

{% include nav.html %}