---
title: 'Solución: Capture la salida'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Puedes encontrar el código fuente en el archivo [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Salida

```
3
```

## Comentarios

1. `:out` redirige la salida del programa hacia el `Proc` en lugar de a la pantalla, y `.out.slurp(:close)` la lee entera; `.trim` quita el salto de línea final que añade `echo`.

1. Una vez que la salida es una cadena ordinaria dentro de nuestro programa, la tratamos como cualquier otro dato: `.words.elems` la parte por los espacios y cuenta las piezas, dando `3`. Ese es el sentido de capturar: el programa externo se convierte en una pieza cuyo resultado procesamos después.

{% include nav.html %}
