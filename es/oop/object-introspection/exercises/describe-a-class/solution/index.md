---
title: 'Solución: Describa una clase'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 Puedes encontrar el código fuente en el archivo [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Salida

```
Dog
4
False
```

## Comentarios

1. `.^name` devuelve el nombre propio de la clase, `Dog`.

1. `.^mro` devuelve la cadena de herencia y `.elems` la cuenta. En la cadena hay cuatro tipos — `Dog`, su padre `Animal` y los universales `Any` y `Mu` —, así que el recuento es `4`.

1. `.^mro.map(*.^name)` convierte esa cadena en la lista de nombres de tipo, `(Dog Animal Any Mu)`. El operador de pertenencia a conjuntos `∈` comprueba entonces si `Cat` es uno de ellos. `Dog` no desciende de ningún `Cat`, así que la respuesta es `False`.

{% include nav.html %}
