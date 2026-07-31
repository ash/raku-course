---
title: 'Solución: Empieza por'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Puedes encontrar el código fuente en el archivo [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Salida

```
True
```

## Comentarios

1. El ancla `^` obliga a la coincidencia a empezar al principio de la cadena, y `\d` exige entonces que ese primer carácter sea un dígito.

1. Sin el `^`, el patrón también funcionaría para un dígito que apareciera más adelante en la cadena, como en `'apples 3'`.

{% include nav.html %}
