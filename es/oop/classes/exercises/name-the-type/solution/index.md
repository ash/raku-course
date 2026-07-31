---
title: 'Solución: Nombre el tipo'
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

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Puedes encontrar el código fuente en el archivo [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Salida

```
(Cat)
True
False
```

## Comentarios

1. `WHAT` devuelve el objeto de tipo, mostrado entre paréntesis como `(Cat)`: `$felix` es un `Cat`.

1. `===` compara dos objetos de tipo por identidad. `$felix.WHAT === Cat.WHAT` es `True` porque Felix realmente es un `Cat`, mientras que `$felix.WHAT === Dog.WHAT` es `False`: un `Cat` y un `Dog` son tipos distintos, así que sus objetos de tipo no coinciden.

{% include nav.html %}
