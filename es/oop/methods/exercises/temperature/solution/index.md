---
title: 'Solución: Conversión de temperatura'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Puedes encontrar el código fuente en el archivo [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Salida

```
212
```

## Comentarios

1. El método trabaja con el propio atributo `degrees` del objeto, así que la fórmula no necesita ningún argumento de entrada.

1. Para `100` grados Celsius el resultado son `212` grados Fahrenheit.

{% include nav.html %}
