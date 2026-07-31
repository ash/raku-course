---
title: Enviar y recibir
translations_gpt:
---

{% include menu.html %}

Una vez abierto un socket, intercambias datos a través de él. Envía texto con `.print` y lee lo que vuelve con `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Esto envía una petición HTTP mínima y lee la respuesta del servidor en `$response`. La primera línea de una respuesta de un servidor web es su línea de estado.

> Este ejemplo necesita una conexión de red que funcione. Al ejecutarlo, imprime la línea de estado de la respuesta. Como `raku.org` redirige el HTTP simple al sitio seguro HTTPS, esa línea es una redirección, como `HTTP/1.1 308 Permanent Redirect`, en lugar de `200 OK`. El dominio especial `example.com` no redirige, así que dirigir la misma petición allí imprime un `HTTP/1.1 200 OK` sin más.

Dos detalles importan al hablar con servidores. Primero, los protocolos de red suelen separar las líneas con `\r\n` (retorno de carro más salto de línea), no con un `\n` a secas, y por eso la petición se escribe con `\r\n`. Segundo, `.recv` devuelve los datos que hayan llegado hasta el momento; para respuestas más grandes lees en un bucle hasta que la conexión se cierra.

Enviar bytes y recibir bytes es todo lo que un socket hace en realidad. Todo lo demás — HTTP y las herramientas de más alto nivel de las secciones siguientes — está construido sobre este sencillo enviar y recibir.

{% include nav.html %}
