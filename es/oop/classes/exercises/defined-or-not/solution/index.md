---
title: 'Solución: Definido o no'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Puedes encontrar el código fuente en el archivo [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Salida

```
False
False
True
True
```

## Comentarios

1. El bucle recorre una mezcla de objetos de tipo (`Cat`, `Dog`) e instancias (`Cat.new`, `Dog.new`).

1. Los dos objetos de tipo no están definidos, así que `defined` devuelve `False` para ellos; las dos instancias sí lo están, así que devuelve `True`. Estar definido depende de que un valor sea un objeto de tipo o una instancia real, no de la clase a la que pertenece.

{% include nav.html %}
