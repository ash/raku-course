---
title: 'Solución: Encuentre un método'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Puedes encontrar el código fuente en el archivo [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Salida

```
True
```

## Comentarios

1. `.^find_method` devuelve el método si existe, o un valor no definido si no. El `so` lo convierte en un booleano simple.

1. `Dog` no define métodos propios y aun así el resultado es `True`: `find_method` busca en toda la cadena de herencia y encuentra `speak` más arriba, en `Animal`. Esto refleja cómo una llamada real a un método sobre un `Dog` localizaría el método heredado.

{% include nav.html %}
