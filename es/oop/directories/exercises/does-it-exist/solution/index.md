---
title: 'Solución: ¿Existe?'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Puedes encontrar el código fuente en el archivo [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Salida

```
False
True
```

## Comentarios

1. `.e` comprueba si una ruta existe. La primera comprobación ocurre antes de crear el archivo, así que devuelve `False`.

1. `spurt` crea entonces `test.txt`, y la segunda comprobación sobre la *misma* ruta devuelve ahora `True`. Volver a preguntar al objeto de ruta refleja el estado actual del sistema de archivos.

{% include nav.html %}
