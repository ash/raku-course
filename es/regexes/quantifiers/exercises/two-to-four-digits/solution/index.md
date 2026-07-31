---
title: 'Solución: De dos a cuatro dígitos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Puedes encontrar el código fuente en el archivo [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Salida

```
｢1234｣
```

## Comentarios

1. `\d ** 2..4` empareja de dos a cuatro dígitos seguidos.

1. La cadena tiene cinco dígitos disponibles, pero el rango limita la coincidencia a cuatro, así que el patrón toma `1234` y deja el `5` final. Al ser voraz, toma el máximo que el rango permite y no el mínimo.

1. La voracidad solo se aplica dentro de una misma coincidencia: el motor sigue deteniéndose en el **primer** sitio donde el patrón funciona. Aunque más adelante en la cadena aparezca una serie de dígitos más larga, nunca se alcanza:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Aquí se empareja `123` aunque la serie posterior `6789012` habría llenado todo el rango con `6789`. Gana la coincidencia más a la izquierda.

{% include nav.html %}
