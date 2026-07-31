---
title: 'Solución: Regex frente a token'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Puedes encontrar el código fuente en el archivo [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Salida

```
True
False
```

## Comentarios

1. En el `regex`, `\d+` agarra primero todo `12345` y después **retrocede**, devolviendo el `5` final para que el `5` literal pueda coincidir. Así que el regex funciona.

1. El `token` se niega a devolver nada: `\d+` se queda con todo `12345`, el `5` literal no encuentra nada libre y el token falla. Ese comportamiento sin retroceso es exactamente el motivo por el que `token` es la opción adecuada por omisión dentro de las gramáticas.

{% include nav.html %}
