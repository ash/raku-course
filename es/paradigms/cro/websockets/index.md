---
title: WebSockets
translations_gpt:
---

{% include menu.html %}

Una conversación HTTP es de un solo disparo: el cliente pregunta, el servidor responde y la conexión termina. Un **WebSocket** eleva eso a un canal de dos direcciones y larga vida: cualquiera de los dos lados puede enviar un mensaje en cualquier momento, que es lo que necesitan los chats, los juegos y los paneles en vivo. Cro admite WebSockets de fábrica, y un manejador de WebSocket se construye con las herramientas reactivas que ya conoces: un flujo de mensajes es un supply.

Aquí tienes un servidor de chat diminuto. Todo mensaje que envía cualquier cliente lo pasa el servidor a mayúsculas y lo difunde a todos los conectados, de modo que lo que vuelve *no* es visiblemente lo que salió, demostrando que los datos hicieron de verdad el viaje de ida y vuelta:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use Cro::HTTP::Server;

my $chat = Supplier.new;

my $application = route {
    get -> 'chat' {
        web-socket -> $incoming {
            supply {
                whenever $incoming -> $message {
                    $chat.emit(uc(await $message.body-text));
                    LAST { done }
                }
                whenever $chat -> $text {
                    emit $text;
                }
            }
        }
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Chat server on ws://127.0.0.1:8080/chat — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Mira el bloque `web-socket`: es la parte reactiva del curso en miniatura. Cada cliente conectado recibe un `supply` con dos `whenever`: uno observa `$incoming`, los mensajes que llegan *desde* ese cliente, pasa cada uno a mayúsculas y lo empuja al supplier compartido `$chat`; el otro observa `$chat` y `emit`e cada texto difundido de vuelta *hacia* el cliente. Un solo `Supplier`, enganchado por cada conexión, es la sala de chat entera.

El pequeño `LAST { done }` importa. Es el [fáser](/es/advanced/block-phasers) que conociste con los bucles; en un bloque `whenever` se dispara cuando el flujo observado **termina**, es decir, cuando ese cliente se desconecta. Llamar allí a `done` cierra el supply de la conexión entera, dándolo de baja de `$chat`. Sin ello, el `whenever $chat` de un cliente que se fue quedaría rezagado, y la difusión siguiente intentaría escribir en un socket cerrado e imprimiría un error en el servidor.

Un navegador habla con esto con unas pocas líneas de JavaScript, pero otro programa Raku también: Cro proporciona además el lado del cliente.

```raku
use Cro::WebSocket::Client;

my $conn = await Cro::WebSocket::Client.connect('ws://127.0.0.1:8080/chat');

my $got = Promise.new;

$conn.messages.tap(-> $message {
    say 'Received: ', await $message.body-text;
    $got.keep;
});

say 'Sending:  Hello, chat!';
$conn.send('Hello, chat!');

await $got;
await $conn.close;
```

`.send` dispara el mensaje y retorna enseguida; la respuesta llega más tarde, en otro hilo, en el bloque `.tap`. La línea principal debe por tanto esperar antes de cerrar y, en lugar de dormir y confiar en la suerte, espera una `Promise` que el enganche cumple en el momento en que aterriza la respuesta: las herramientas de concurrencia de antes en esta parte haciendo exactamente aquello para lo que se hicieron.

Ejecuta el servidor en una terminal y este cliente en otra. El cliente imprime las dos direcciones de la conversación:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

Lo que salió en minúsculas volvió en mayúsculas: el mensaje viajó *hacia* el servidor, allí se transformó y viajó *de vuelta* por la misma conexión. Ese es el canal de dos direcciones en acción. Arranca el cliente en varias terminales a la vez y cada mensaje aparece en todas: un chat que funciona en menos de treinta líneas de Raku.

> Estos ejemplos necesitan Cro instalado (`zef install cro`).

Este es un buen lugar para terminar el curso. Un servicio, el cliente que lo llama y un canal vivo de dos direcciones entre ambos se apoyan en todo lo anterior — objetos y excepciones, expresiones regulares y gramáticas, y las herramientas funcionales, concurrentes y reactivas de esta parte —, y sin embargo el código sigue siendo corto y dice exactamente lo que quieres decir. De [bytes en un socket](/es/paradigms/connections/sending-receiving) a una sala de chat en una pantalla de código: eso es Raku.

{% include nav.html %}
