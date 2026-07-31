---
title: 'Solución: Envíe y reciba'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 Puedes encontrar el código fuente en el archivo [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Salida

```
HTTP/1.1 200 OK
```

## Comentarios

1. `.print` envía la petición; las líneas del protocolo terminan en `\r\n`. Una petición `HEAD` pide al servidor solo la línea de estado y las cabeceras, así que la respuesta es pequeña.

1. `.recv` lee la respuesta, y `.lines.first` toma su primera línea: la línea de estado de HTTP.

{% include nav.html %}
