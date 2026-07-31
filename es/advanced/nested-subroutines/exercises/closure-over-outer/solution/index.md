---
title: 'Solution: Clausura sobre lo externo'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Puedes encontrar el código fuente en el archivo [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Salida

```
Hello, Anna!
```

## Comentarios

1. `message` no toma argumentos, pero puede usar `$name`. Una subrutina anidada cierra sobre las variables léxicas de la subrutina que la contiene, así que el `$name` externo está en el ámbito.

1. Cuando se ejecuta `greet('Anna')`, `$name` es `'Anna'`, así que `message` devuelve `Hello, Anna!`. Esta compartición del ámbito contenedor es lo que hace que las funciones auxiliares anidadas sean más que simples funciones ocultas.

{% include nav.html %}
