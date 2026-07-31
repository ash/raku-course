---
title: 'Solución: Empareje una frase'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Puedes encontrar el código fuente en el archivo [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Salida

```
｢love Raku｣
```

## Comentarios

1. Aquí el espacio entre las palabras es significativo, así que la frase va envuelta en comillas: `'love Raku'`. Sin las comillas, el motor de regex ignoraría el espacio y buscaría `loveRaku`, que no está en la cadena.

1. El emparejamiento inteligente devuelve un objeto de coincidencia que abarca toda la frase entrecomillada, que `say` imprime entre esquinas.

{% include nav.html %}
