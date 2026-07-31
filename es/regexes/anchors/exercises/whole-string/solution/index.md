---
title: 'Solución: La cadena entera'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Puedes encontrar el código fuente en el archivo [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Salida

```
True
```

## Comentarios

1. Las anclas `^` y `$` fijan el patrón al principio y al final de la cadena.

1. Entre ellas, `<[a..z]>+` tiene que dar cuenta de todos los caracteres, así que una cadena con una mayúscula o un espacio, como `Hello there`, fallaría.

{% include nav.html %}
