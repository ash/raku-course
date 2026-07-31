---
title: 'Solución: Triplicar como método'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Puedes encontrar el código fuente en el archivo [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Salida

```
21
```

## Comentarios

1. Como método, `triple` pertenece al objeto y trabaja con el `n` del propio objeto: no se le pasa nada.

1. Comparado con la versión con subrutina, los datos viven en el objeto en lugar de llegar como argumento. Ambos dan `21`.

{% include nav.html %}
