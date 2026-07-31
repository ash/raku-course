---
title: Una subrutina recursiva
translations_gpt:
---

{% include menu.html %}

Una subrutina _recursiva_ es la que se llama a sí misma. El ejemplo clásico es el factorial: el factorial de `n` es `n` por el factorial de `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Lee el cuerpo como dos casos unidos por el operador ternario `?? !!`:

* cuando `$n` es `1` o menos, la respuesta es simplemente `1`;
* en caso contrario, la respuesta es `$n` por `fact($n - 1)`, la misma subrutina llamada con un número más pequeño.

Cada llamada arranca un factor y pide un factorial más pequeño, hasta que el número llega a `1` y las llamadas se desenrollan: `fact(5)` es `5 * fact(4)`, que es `5 * 4 * fact(3)`, y así hasta `1`.

La recursión expresa muchos problemas de forma muy directa. Siempre que una tarea se pueda describir en términos de una versión más pequeña de sí misma, una subrutina recursiva suele ser la manera más natural de escribirla.

{% include nav.html %}
