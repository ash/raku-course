---
title: 'Solución: Palabra o dígito'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Puedes encontrar el código fuente en el archivo [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Salida

```
｢5｣
```

## Comentarios

1. La alternativa mezcla un literal, `cat`, con una clase de caracteres, `\d`. El patrón empareja la alternativa que se encuentre primero en la cadena.

1. En `item 5` no hay ningún `cat`, pero sí un dígito, así que `\d` empareja el `5`.

{% include nav.html %}
