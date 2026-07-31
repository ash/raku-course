---
title: 'Solución: Construya un registro'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Puedes encontrar el código fuente en el archivo [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Salida

```
start
entry 1
entry 2
entry 3
```

## Comentarios

1. El primer `spurt` crea el archivo de cero con la línea `start`.

1. Cada `spurt` dentro del bucle usa `:append`, así que añade su línea después del contenido existente en lugar de sustituir el archivo. Así es exactamente como crece un archivo de registro: cada iteración (o cada ejecución de un programa) añade una línea más al final.

1. Sin `:append`, cada pasada sobrescribiría el archivo y solo sobreviviría la última línea.

{% include nav.html %}
