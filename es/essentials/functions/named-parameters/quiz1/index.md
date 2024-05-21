---
title: Quiz — Parámetros nombrados
---

{% include menu.html %}

Considera una función:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

¿Cuáles son las formas válidas de llamarla?

{:.quiz}
0 | f(1, 2) | Argumentos posicionales pasados, no nombrados.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Operador de asignación en lugar de un constructor de pares.
1 | f(b => 2, a => 1)

## 2

Para la misma función, ¿qué devuelven las siguientes llamadas?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` devuelve&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` devuelve&nbsp; (: 1, −1 :) | El orden de los argumentos nombrados no importa.
1 | `f(a => 2, b => 1)` devuelve&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}