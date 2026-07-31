---
title: Quiz — Pragmas
translations_gpt:
---

{% include menu.html %}

Con la pragma `strict` de Raku activada por defecto, ¿qué sucede cuando asignas a una variable que nunca declaraste, como en `$x = 42`?

{:.quiz}
1 | Es un error en tiempo de compilación
0 | Crea `$x` silenciosamente
0 | Imprime una advertencia pero se ejecuta
0 | Establece `$x` en `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` está activada por defecto y requiere que cada variable sea declarada primero con `my`, así que un `$x = 42` sin declarar no compila — *Variable '$x' is not declared*. Desactivar la pragma con `no strict` permitiría que la asignación se realice.

</div>

{% include nav.html %}
