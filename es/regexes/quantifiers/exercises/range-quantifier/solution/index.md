---
title: 'Solución: De dos a cuatro'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Puedes encontrar el código fuente en el archivo [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Salida

```
｢abcd｣
```

## Comentarios

1. `\w ** 2..4` empareja de dos a cuatro caracteres de palabra.

1. Al ser voraz, toma tantos como le permite el rango — cuatro —, así que la coincidencia es `abcd`.

{% include nav.html %}
