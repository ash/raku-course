---
title: Operaciones booleanas con otros tipos
---

{% include menu.html %}

En la siguiente sección, hablaremos sobre la conversión de datos de diferentes tipos entre sí. Pero antes de eso, es importante resaltar la siguiente característica de Raku. Cuando aplicas operaciones booleanas a cadenas o enteros, los valores no se convierten en booleanos, y el resultado tampoco es un valor booleano. Considera los siguientes ejemplos:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Leamos las reglas 📖 [de la documentación](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` devuelve el primer argumento que evalúa como Falso en contexto booleano, de lo contrario devuelve el último argumento.
* `||` devuelve el primer argumento que evalúa como Verdadero en contexto booleano, de lo contrario devuelve el último argumento.
* `^^` devuelve el argumento Verdadero si hay uno (y solo uno). Devuelve el último argumento si todos los argumentos son Falsos. Devuelve `Nil` cuando más de un argumento es verdadero.

Observa que acabamos de encontrarnos con un valor ‘nulo’ `Nil`.

{% include nav.html %}