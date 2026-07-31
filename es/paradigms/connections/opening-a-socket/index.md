---
title: Abrir un socket
translations_gpt:
---

{% include menu.html %}

Un _socket_ es una conexión entre dos programas a través de una red. La clase básica de Raku para sockets TCP es `IO::Socket::INET`, y no necesitas instalar nada más para usarla.

Para conectarte a un servidor remoto, crea un socket con el host y el puerto a los que quieres llegar:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` abre la conexión de inmediato. El puerto `80` es el puerto estándar de HTTP, así que esto conecta con el servidor web de `raku.org`. Cuando hayas terminado, `.close` libera la conexión.

> Este ejemplo necesita una conexión de red que funcione. Cuando conecta con éxito, imprime `connected`.

La misma clase se usa en dos modos: como **cliente**, conectando hacia un servidor como se muestra aquí, y como **servidor**, escuchando las conexiones que llegan (cosa que verás más adelante). Por ahora, la idea que hay que llevarse es que `IO::Socket::INET.new(:host, :port)` te da un canal vivo de dos direcciones hacia otra máquina.

{% include nav.html %}
