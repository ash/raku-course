---
title: 'Solución: Dónde está el dígito'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Puedes encontrar el código fuente en el archivo [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Salida

```
3
4
```

## Comentarios

1. La clase `\d` empareja un solo dígito. El motor se detiene en el **primero** que encuentra — `9`, en el índice `3` (las posiciones se cuentan desde cero); el `2` posterior nunca se alcanza.

1. `.from` da el comienzo de la coincidencia, `3`, y `.to` da la posición justo después de su final, `4`. La diferencia `.to - .from` es la longitud de la coincidencia: aquí un carácter.

{% include nav.html %}
