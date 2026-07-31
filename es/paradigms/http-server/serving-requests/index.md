---
title: Atender muchas peticiones
translations_gpt:
---

{% include menu.html %}

El servidor de la página anterior atendía una sola petición y después se detenía. Un servidor real sigue corriendo, respondiendo a un cliente tras otro. Envuelve los pasos de aceptar, leer y responder en un `loop` y, como el bucle comparte las variables declaradas a su alrededor, puedes conservar estado entre peticiones. Aquí el servidor cuenta a sus clientes y le dice a cada uno su número:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # a qq:to heredoc makes a tidy template — the variable interpolates straight in
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # send the header first, then the body, as two separate writes
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **se bloquea** hasta que un cliente conecta, y devuelve entonces un socket nuevo para esa conversación concreta. Como `$customer` vive fuera del bucle, sobrevive de una petición a la siguiente: el primer visitante es el cliente `1`, el segundo el `2`, y así sucesivamente. El bucle no termina nunca por sí solo, así que el servidor se mantiene en pie hasta que lo detienes con Ctrl-C.

Merece la pena fijarse en dos detalles:

* **La respuesta se escribe en dos partes.** El primer `.print` envía la cabecera HTTP: la línea de estado, el tipo de contenido y la línea en blanco que cierra las cabeceras. El segundo envía el cuerpo. A HTTP le da igual que estos lleguen en una escritura o en varias, así que separarlos mantiene aparte el formulismo fijo del protocolo de la parte que realmente cambia.

* **El cuerpo viene de una plantilla.** `qq:to/END/` es un *heredoc*: una cadena `qq` que se extiende hasta la línea `END`. Abarca varias líneas e interpola `$customer` igual que cualquier cadena entre comillas dobles, lo que la convierte en una pulcra herramienta de plantillas para construir una respuesta. (Es una de las [construcciones de entrecomillado](/es/advanced/quoting-constructs) vistas antes en el curso.)

Conéctate unas cuantas veces para ver subir el contador:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Atender las peticiones una tras otra de este modo es la clase de servidor más sencilla. Un servidor de producción atendería además cada conexión en su propio hilo o promesa, de modo que un cliente lento no pueda retener a los demás, pero su corazón es exactamente este bucle: aceptar, leer, responder, repetir.

{% include nav.html %}
