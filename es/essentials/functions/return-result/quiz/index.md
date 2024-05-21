---
title: Quiz — Retorno de una función
---

{% include menu.html %}

## 1

¿Qué devuelve esta función?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` devuelve&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` devuelve&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` devuelve&nbsp; (: 1, 2, 3, 42 :)

## 2

¿Qué devuelve esta función?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` devuelve&nbsp; (: −1, 1 :) | La última expresión `1;` nunca se alcanza.


{% include quiz.html %}

{% include nav.html %}