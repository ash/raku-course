---
title: 'Solution: Semáforos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Puedes encontrar el código fuente en el archivo [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Salida

```
red is 0
amber is 1
green is 2
```

## Comentarios

1. `my Light $current` es una variable ordinaria y mutable — solo restringida al tipo `Light`. Asignar la siguiente constante avanza la luz, y el número sigue al nombre cada vez: `0`, `1`, `2`.

1. `$current++` parece que debería avanzar a la siguiente luz por sí solo, pero falla con un error de verificación de tipo. `++` trata la constante como su número simple y devuelve un `Int` (`red` se convierte en `1`), y un `Int` ya no encaja en el tipo `Light`. Así que avanzas la luz asignando la siguiente constante, como se muestra arriba.

1. La restricción de tipo se aplica a cada asignación, no solo a la primera. `$current` aceptará `red`, `amber` o `green`, pero asignar algo que no sea un `Light` — un número suelto o una cadena — sería un error de verificación de tipo.

{% include nav.html %}
