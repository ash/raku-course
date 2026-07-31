---
title: 'Solución: Primero el apellido'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Puedes encontrar el código fuente en el archivo [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Salida

```
Hopper, Grace
```

## Comentarios

1. El nombre y el apellido se capturan en `$0` y `$1`.

1. Dentro de una cadena entre comillas dobles cada captura se interpola como el texto que emparejó. Imprimir `"$1, $0"` pone primero el apellido, seguido de una coma y un espacio literales y después el nombre.

{% include nav.html %}
