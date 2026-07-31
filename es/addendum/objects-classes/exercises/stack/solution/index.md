---
title: 'Solución: Una clase pila'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Stack {
    has @!items;

    method push($x) { @!items.push($x) }
    method pop      { @!items.pop }
    method peek     { @!items.tail }
    method size     { @!items.elems }
}

my $stack = Stack.new;
$stack.push($_) for 1, 2, 3;

say $stack.peek;
say $stack.pop;
say $stack.size;
```

🦋 Puedes encontrar el código fuente en el archivo [stack.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/stack.raku).

## Salida

```
3
3
2
```

## Comentarios

1. `@!items` es un atributo privado: el tigilo `!` significa que solo se alcanza desde
dentro de la clase, que es exactamente lo que debería ser el almacenamiento de una pila.

1. `peek` usa `.tail` para mirar el último elemento sin quitarlo, mientras que `pop` sí
lo saca, así que el tamaño baja de `3` a `2`.

{% include nav.html %}
