---
title: Una ruta de Cro
translations_gpt:
---

{% include menu.html %}

Un servicio HTTP de Cro se describe mediante un conjunto de _rutas_: cada ruta dice qué URL atiende y qué devolver. Las construyes dentro de un bloque `route` con la palabra clave `get`:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Lee la ruta como «una petición `GET` a la ruta `hello` devuelve el texto `Hello from Cro!`». La función `content` fija a la vez el tipo de contenido y el cuerpo: ni una línea de estado ni un `\r\n` a la vista. `Cro::HTTP::Server` ata las rutas a una dirección y un puerto, y `.start` empieza a servir.

Una sutileza: `.start` **no** se bloquea; arranca el servicio en hilos de segundo plano y retorna enseguida, y si el programa terminara sencillamente ahí, el servidor se desvanecería con él. El bloque `react` final es lo que mantiene vivo el programa, y es un viejo conocido: `whenever signal(SIGINT)` reacciona a la señal de interrupción (Ctrl-C en el teclado) parando el servidor y llamando a `done`. Las herramientas reactivas de antes en esta parte son exactamente la manera en que un programa Cro espera, sirve y se apaga con limpieza.

> Este ejemplo necesita Cro instalado (`zef install cro`). Ejecútalo, abre `http://127.0.0.1:8080/hello` y detén el servidor con Ctrl-C cuando hayas terminado.

> No te preocupes si el servidor imprime de vez en cuando `Cannot write to a closed socket` mientras navegas. Eso no es un fallo de tu código: un cliente — normalmente un navegador — abrió una conexión y la soltó antes de leer la respuesta, como los navegadores hacen habitualmente con peticiones especulativas o canceladas. Cro toma nota del cliente desaparecido, y el servidor sigue sirviendo.

Una ruta puede tomar segmentos de la URL como parámetros, devolver JSON y mucho más, pero la forma es siempre esta: declara qué hace cada ruta, entrega las rutas a un servidor y arráncalo. Comparado con el servidor de sockets en crudo de la sección anterior, Cro elimina toda la contabilidad del protocolo y te deja escribir solo la parte específica de tu servicio.

Esta ruta, sin embargo, dice siempre lo mismo. La página siguiente permite que una ruta lea un **parámetro** de la URL, de modo que una sola ruta pueda saludar de manera distinta a `/hello/Anna` y a `/hello/Bob`.

{% include nav.html %}
