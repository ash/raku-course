---
title: 'Solución: Pase un manejador a una función'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Puedes encontrar el código fuente en el archivo [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Salida

```
started
working
done
```

## Comentarios

1. El manejador que devuelve `open` es solo un valor guardado en `$fh`, así que puede pasarse a `log-line` como argumento igual que cualquier cadena o número. Dentro de la subrutina, `$fh.say` escribe a través de ese mismo manejador abierto.

1. Como el manejador sigue abierto durante las tres llamadas, cada `log-line` añade otra línea al mismo archivo. `close` vuelca entonces todo, y `slurp` vuelve a leer las tres líneas.

1. Esto es lo que hace componibles a los manejadores: una función puede aceptar un manejador y escribir en él (o leer de él) sin importarle a qué archivo apunta; eso lo decide quien la llama al abrir el archivo.

{% include nav.html %}
