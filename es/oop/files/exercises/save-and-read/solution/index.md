---
title: 'Solución: Guarde y lea'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Puedes encontrar el código fuente en el archivo [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Salida

```
84
```

## Comentarios

1. `spurt` crea el archivo y le escribe la cadena; `slurp` vuelve a leer el archivo entero en una cadena. Juntas forman un viaje completo de guardado y carga.

1. Lo que devuelve `slurp` es texto — `"42\n"` —, así que quitamos el salto de línea final con `trim` y llamamos a `.Int` para convertirlo en un número antes de hacer aritmética. El resultado, `42 * 2`, es `84`.

1. Aun así, el programa funciona también sin `.trim.Int`.

{% include nav.html %}
