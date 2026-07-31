---
title: Responder a una petición
translations_gpt:
---

{% include menu.html %}

Una vez que un cliente ha conectado, lees su petición y envías una respuesta. Para un navegador web, la respuesta debe ser HTTP válido: una línea de estado, cabeceras opcionales, una línea en blanco y después el cuerpo.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

La respuesta refleja el formato de petición que viste en el lado del cliente. `HTTP/1.0 200 OK` es la línea de estado, `Content-Type: text/plain` es una cabecera, la línea en blanco (`\r\n\r\n`) cierra las cabeceras, y `Hello, web!` es el cuerpo que el navegador muestra.

Ejecuta este programa y golpéalo después desde otra terminal con `curl` (o abre `http://127.0.0.1:8080/` en un navegador), y el cuerpo se imprime directamente en la pantalla:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Esto atiende una sola petición y después se detiene. Para servir muchas peticiones, envolverías los pasos de `.accept`, lectura y respuesta en un bucle, y normalmente atenderías cada conexión en su propio hilo o promesa para que los clientes lentos no bloqueen a los demás. Pero la esencia de un servidor web es exactamente esto: aceptar una conexión, leer la petición, escribir una respuesta HTTP.

La [página siguiente](/es/paradigms/http-server/serving-requests) hace precisamente eso: un servidor que se mantiene vivo, iterando para responder una petición tras otra en lugar de detenerse tras la primera.

{% include nav.html %}
