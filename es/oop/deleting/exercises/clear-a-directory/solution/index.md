---
title: 'Solución: Vacíe un directorio'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Puedes encontrar el código fuente en el archivo [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Salida

```
False
```

## Comentarios

1. `rmdir` solo elimina un directorio vacío, así que los archivos tienen que irse primero. `'cache'.IO.dir` lista las entradas y `.unlink for …` borra cada una.

1. Con el directorio ya vacío, `rmdir` lo elimina. La comprobación final con `.e` informa `False`, confirmando que `cache` ha desaparecido.

{% include nav.html %}
