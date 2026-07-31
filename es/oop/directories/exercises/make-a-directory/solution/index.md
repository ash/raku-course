---
title: 'Solución: Cree un directorio'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Puedes encontrar el código fuente en el archivo [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Salida

```
True
True
```

## Comentarios

1. `mkdir` crea el directorio, y `.IO.d` confirma que `reports` es un directorio.

1. Como el directorio ya existe, podemos escribir un archivo dentro dando una ruta que incluya el nombre del directorio, `reports/data.txt`. Comprobar `.e` sobre esa ruta confirma que el archivo se creó dentro del directorio nuevo.

1. El orden importa: `spurt` **no** crea por ti los directorios que falten. Escribir en `reports/data.txt` antes de que exista el directorio `reports` falla con un error como `Failed to open file … : No such file or directory`. Crear primero el directorio — como hace aquí `mkdir` — es lo que permite que la escritura funcione. Convenientemente, `mkdir` también crea los directorios intermedios que falten, así que una ruta anidada como `mkdir 'reports/2026'` construye toda la cadena en una sola llamada.

{% include nav.html %}
