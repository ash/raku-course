---
title: Usar un módulo cliente
translations_gpt:
---

{% include menu.html %}

Cro no sirve solo para construir servicios: también trae un **cliente** HTTP para hacer peticiones. La manera más clara de conocerlo es apuntarlo al mismísimo servidor que construiste en la página anterior. Aquí las dos mitades corren en un solo programa: arrancamos el servicio y después lo llamamos nosotros mismos.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# the tiny service from the previous page
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# now be the client and call it
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` devuelve una promesa — apropiado, ya que una petición de red termina más tarde —, así que la esperas con `await`. El objeto de respuesta conoce su estado, sus cabeceras y su cuerpo; `await $response.body-text` devuelve el texto que envió el servidor, `Hello from Cro!`. Compara esto con el socket en crudo de la [sección de conexiones](/es/paradigms/connections/sending-receiving): no hay `\r\n`, ni línea de estado que analizar, ni lectura en un bucle; el cliente y el servidor se hablan en unas pocas líneas sencillas.

> Este ejemplo necesita Cro instalado (`zef install cro`).

## Cuando la página no está

¿Y si pides una ruta que el servicio no tiene? El lado del servidor es fácil: una petición que no coincide con ninguna ruta recibe automáticamente un `404 Not Found` de Cro. En el lado del cliente, una petición fallida **lanza** una excepción — el error viaja con la promesa y sale a la luz en el `await`, igual que viste con las [promesas rotas](/es/paradigms/await/awaiting-promises) —, así que la manejas con las herramientas de excepciones de siempre:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Nuestro servicio tiene una ruta `hello` pero ninguna `goodbye`, así que esto imprime `Request failed with status 404`. La excepción lleva la respuesta completa en su `.response`, con el código de estado y las cabeceras ahí para inspeccionarlos.

Tu propio servicio, con todo, no es más que el servidor que tienes más cerca. La página siguiente apunta el mismo cliente a la web más amplia: **API públicas** que responden con JSON o con texto listo para la terminal.

{% include nav.html %}
