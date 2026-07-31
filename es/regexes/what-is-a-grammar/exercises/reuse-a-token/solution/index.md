---
title: 'Solución: Reutilice un token'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Puedes encontrar el código fuente en el archivo [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Salida

```
｢cat｣
｢dog｣
```

## Comentarios

1. El mismo regex con nombre `word` se llama dos veces en el patrón.

1. Cuando una captura con nombre aparece más de una vez, los resultados forman una lista, así que se leen como `$<word>[0]` y `$<word>[1]`.

{% include nav.html %}
