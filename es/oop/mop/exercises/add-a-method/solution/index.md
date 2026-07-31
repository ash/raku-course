---
title: 'Solución: Añada un método'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Puedes encontrar el código fuente en el archivo [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Salida

```
Rex says woof
```

## Comentarios

1. `.^add_method` adosa en tiempo de ejecución un método nuevo al metaobjeto de la clase, dado como un `method { … }` anónimo.

1. El método añadido es un método real de la clase, así que dentro de él `$.name` llega al atributo `name` del objeto, igual que lo haría un método escrito en el cuerpo de la clase. Tras la llamada, todo `Dog` responde a `.speak`.

{% include nav.html %}
