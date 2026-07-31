---
title: 'Solución: Una segunda ruta'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
    get -> 'bye' {
        content 'text/plain', 'Goodbye!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Salida

```
Goodbye!
```

## Comentarios

1. Un bloque `route` puede contener tantas rutas como quieras; cada `get` atiende una ruta.

1. Cro empareja la ruta de la petición con la ruta correcta, así que `/hello` y `/bye` devuelven cada una su propia respuesta.

1. Igual que en la página teórica, `.start` retorna de inmediato, así que el bloque `react` final mantiene vivo el programa hasta que pulsas Ctrl-C; `whenever signal(SIGINT)` para entonces el servidor y termina la reacción.

{% include nav.html %}
