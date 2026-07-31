---
title: 'Solución: No seguido de'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Puedes encontrar el código fuente en el archivo [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Salida

```
True
```

## Comentarios

1. `<!before '%'>` es un lookahead negativo: funciona solo cuando el texto justo detrás del número **no** es un `%`.

1. El `>>` es un límite de palabra que marca el **final** del número, y aquí importa. Sin él, el voraz `\d+` retrocedería: en `50% off` cedería el `0` y emparejaría solo `5`, al que *no* le sigue `%`, de modo que el patrón funcionaría erróneamente. `>>` obliga a `\d+` a tomar el número entero, así que el lookahead se comprueba en el final real. Como resultado, `50 dollars` da `True` y `50% off` da correctamente `False`.

{% include nav.html %}
