---
title: 'Solución: Escribir con un manejador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Puedes encontrar el código fuente en el archivo [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Salida

```
1
2
3
```

## Comentarios

1. `open` con la bandera `:w` da un manejador para escritura. El manejador sigue abierto durante todo el bucle, así que cada `$fh.say` añade una línea más: esa es la ventaja de un manejador frente a `spurt`, que volvería a abrir el archivo cada vez.

1. `close` vuelca los datos al disco, de modo que el `slurp` siguiente vuelve a leer las tres líneas.

{% include nav.html %}
