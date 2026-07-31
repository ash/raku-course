---
title: Consultar una API pública
translations_gpt:
---

{% include menu.html %}

El cliente de la página anterior alcanza cualquier servidor de la web, no solo el tuyo. Muchas API públicas responden con JSON, y Cro lo analiza por ti, de modo que `.body` devuelve una estructura de datos lista para usar en lugar de texto. Aquí le preguntamos a un servicio meteorológico gratuito la temperatura actual en Berlín:

```raku
use Cro::HTTP::Client;

my $url = 'https://api.open-meteo.com/v1/forecast'
        ~ '?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m';

my $response = await Cro::HTTP::Client.get($url);
my %current  = (await $response.body)<current>;

say "Berlin right now:";
say "  temperature: %current<temperature_2m> °C";
say "  wind speed:  %current<wind_speed_10m> km/h";
```

que imprime algo como:

```
Berlin right now:
  temperature: 21.9 °C
  wind speed:  8.4 km/h
```

Los números exactos cambian con el tiempo meteorológico, claro. Los dos números de la URL son coordenadas geográficas — `52,52° N, 13,41° E` es Berlín —, así que pon ahí la latitud y la longitud de tu propia ciudad para obtener tu tiempo local. En cualquier caso, una petición y `.body` (o `.body-text`) te dan la respuesta: sin sockets, sin analizar estados, sin manejar JSON a mano.

## Texto simple para la terminal

JSON no es la única forma que puede tomar una respuesta. El servicio meteorológico [wttr.in](https://wttr.in) también puede servir JSON, pero su especialidad es el texto simple dibujado para la terminal, y decide el formato mirando **quién pregunta**: los clientes de línea de órdenes reciben texto, los navegadores reciben una página web. Cro te permite fijar cabeceras de petición, así que preséntate como uno de los de la terminal:

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get(
    'https://wttr.in/Berlin?format=3',
    headers => [ User-Agent => 'curl' ],
);
print await $response.body-text;
```

Esto imprime un parte meteorológico de una línea, listo para un prompt del shell o una barra de estado:

```
Berlin: 🌤️  +25°C
```

Aquí el cuerpo es texto simple, así que se lee con `.body-text`. Quita el `?format=3` de la URL y el servicio responde en cambio con su parte meteorológico completo, de varias líneas, en arte ASCII.

> Estos ejemplos necesitan Cro instalado (`zef install cro`) y una conexión de red que funcione.

Las peticiones y las respuestas no son toda la historia, con todo. El apartado final abre un **WebSocket**: un canal vivo de dos direcciones donde las herramientas reactivas de esta parte tienen su gran final.

{% include nav.html %}
