---
title: 'Solución: Un rombo de clases'
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

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Puedes encontrar el código fuente en el archivo [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Salida

```
(D B C A Any Mu)
```

## Comentarios

1. `D` hereda de dos padres a la vez: `class D is B is C` enumera cada uno con su propio `is`. Esto es herencia múltiple, y `A`, `B`, `C`, `D` forman un *rombo*: dos caminos desde `D` hasta el antepasado común `A`.

1. `.^mro` aplana ese rombo en un único orden de búsqueda lineal. Primero va `D`, después sus padres `B` y `C` en el orden en que se escribieron, después el común `A` y por último `Any` y `Mu`.

1. Aunque tanto `B` como `C` llevan a `A`, el tipo `A` aparece **una sola vez**, y solo después de ambos. Ese es el sentido de un orden de resolución de métodos: cada tipo se visita exactamente una vez, y un padre nunca va antes que una hija que hereda de él, de modo que un método definido en `B` se encuentra siempre antes que el que sobrescribiría en `A`.

{% include nav.html %}
