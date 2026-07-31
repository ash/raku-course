---
title: 'Solución: El orden de resolución de métodos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Puedes encontrar el código fuente en el archivo [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Salida

```
(C B A Any Mu)
```

## Comentarios

1. `.^mro` devuelve la cadena de tipos que Raku recorre al resolver un método.

1. La cadena sigue la línea de herencia paso a paso: `C`, después su padre `B`, después el padre de `B`, `A`, y por último `Any` y `Mu`, con los que termina todo tipo. Una jerarquía más profunda simplemente alarga la lista.

{% include nav.html %}
