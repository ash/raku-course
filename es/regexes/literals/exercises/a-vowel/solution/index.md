---
title: 'Solución: Una vocal'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Puedes encontrar el código fuente en el archivo [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Salida

```
｢e｣
```

## Comentarios

1. La clase `<[aeiou]>` enumera las cinco vocales; empareja la que aparezca primero.

1. En `Hello` la letra `H` no está en la clase, así que la coincidencia empieza en `e`.

{% include nav.html %}
