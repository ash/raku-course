---
title: 'Solución: Espere a varias'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Puedes encontrar el código fuente en el archivo [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Salida

```
(APPLE PEAR PLUM)
```

## Comentarios

1. `@words.map(-> $w { start { $w.uc } })` convierte cada palabra en su propia promesa, así que las tres pasan a mayúsculas de forma concurrente. El bloque con flecha nombra la palabra `$w`, de modo que cada promesa captura la correcta.

1. `await @jobs` espera la lista entera y devuelve los resultados en su orden original, dando `(APPLE PEAR PLUM)`.

{% include nav.html %}
