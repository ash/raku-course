---
title: 'Solución: ¿Coincidió?'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Puedes encontrar el código fuente en el archivo [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Salida

```
True
```

## Comentarios

1. Una coincidencia lograda es un valor verdadero, pero se imprime como objeto de coincidencia. La función `so` lo convierte en un `True` o `False` simple.

{% include nav.html %}
