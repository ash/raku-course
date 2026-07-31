---
title: 'Solución: La ruta en mayúsculas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — the path is the second word; drop the leading '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 Puedes encontrar el código fuente en el archivo [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Salida

```
HELLO
```

## Comentarios

1. `.recv` lee la petición. Su primera línea es `GET /hello HTTP/1.0`; `.words[1]` extrae `/hello`, y `.substr(1)` quita la barra inicial para dejar `hello`.

1. `.uc` lo pasa a mayúsculas, y eso se convierte en el cuerpo de la respuesta. La respuesta depende ahora de lo que pidió el cliente: el servidor está **procesando** la petición, no devolviendo una cadena fija.

1. El bloque entero de aceptar, leer y responder está dentro de un `loop`, así que el servidor responde una petición tras otra en lugar de detenerse tras la primera. Detenlo con Ctrl-C.

{% include nav.html %}
