---
title: 'Solución: Una palabra de tamaño'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Puedes encontrar el código fuente en el archivo [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Salida

```
｢large｣
```

## Comentarios

1. La alternativa enumera tres posibilidades; el patrón empareja la que esté presente en la cadena.

1. Solo aparece `large`, así que esa es la coincidencia.

{% include nav.html %}
