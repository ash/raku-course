---
title: 'Solución: Un número desnudo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Puedes encontrar el código fuente en el archivo [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Salida

```
｢5｣
```

## Comentarios

1. `<!after '$'>` es un lookbehind negativo: funciona solo cuando el carácter justo anterior a la posición actual **no** es un `$`. Comprueba a ese vecino sin consumirlo.

1. El `9` se rechaza porque está justo después de un `$`, así que el motor empareja en su lugar el `5` anterior, delante del cual no hay nada.

{% include nav.html %}
