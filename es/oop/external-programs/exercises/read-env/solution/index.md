---
title: 'Solución: Pase una variable a un proceso hijo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Puedes encontrar el código fuente en el archivo [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Salida

```
3
```

## Comentarios

1. `spurt` crea `notes.txt` con tres líneas. Fijar `%*ENV<NOTES>` a su nombre pone el nombre del archivo en el entorno que heredará cualquier programa hijo.

1. La orden de `shell` hereda ese entorno, expande `$NOTES` a `notes.txt` y alimenta con el archivo a `wc -l`, que cuenta sus líneas. La redirección `< "$NOTES"` deja la salida reducida al número `3`, que capturamos con `:out` y limpiamos con trim.

1. Por último, la limpieza se hace de vuelta en Raku con `unlink`: no hace falta ninguna shell. Borrar el archivo es una simple operación del sistema de archivos, así que no hay motivo para lanzar otro proceso.

{% include nav.html %}
