---
title: Un error de número negativo
translations_gpt:
---

{% include menu.html %}

## Problema

Define una clase de excepción personalizada `Negative` que herede de `Exception`, tenga un atributo `n` y cuyo método `message` devuelva `<n> is negative`.

Escribe una subrutina `check($n)` que lance una `Negative` (llevando esa `n`) cuando su argumento sea menor que cero, y que en caso contrario devuelva el argumento. Después, dentro de un bloque, llama a `check(-5)` y usa un phaser `CATCH` con `when Negative` para imprimir el mensaje de la excepción.

Por último, después del bloque, lanza otra `Negative` (con `n` igual a `-10`) para mostrar que una excepción lanzada donde ningún `CATCH` la vigila termina el programa.

## Ejemplo

El programa imprime:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
