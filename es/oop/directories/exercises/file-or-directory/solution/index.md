---
title: 'Solución: ¿Archivo o directorio?'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Puedes encontrar el código fuente en el archivo [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Salida

```
True
False
```

## Comentarios

1. `.f` comprueba si es un archivo regular, así que devuelve `True` para `a.txt`.

1. `.d` comprueba si es un directorio. Preguntado sobre esa misma ruta, devuelve `False`, porque `a.txt` es un archivo y no un directorio. Las dos comprobaciones son complementarias, y así es como se distingue un archivo de un directorio.

{% include nav.html %}
