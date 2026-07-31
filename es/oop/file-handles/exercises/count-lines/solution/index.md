---
title: 'Solución: Cuente las líneas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Puedes encontrar el código fuente en el archivo [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Salida

```
4
```

## Comentarios

1. `.IO.lines` devuelve las líneas del archivo como lista.

1. `.elems` las cuenta, dando `4`.

{% include nav.html %}
