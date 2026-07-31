---
title: 'Solución: Borre un archivo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Puedes encontrar el código fuente en el archivo [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Salida

```
True
False
```

## Comentarios

1. `spurt` crea el archivo, así que la primera comprobación con `.e` informa `True`.

1. `unlink` lo borra. La segunda comprobación con `.e` informa entonces `False`, porque el archivo ya no está. Fíjate en el uso de `.e` en lugar de `.f`: la comprobación de tipo `.f` lanzaría una excepción sobre una ruta que ya no existe, mientras que `.e` simplemente responde `False`.

{% include nav.html %}
