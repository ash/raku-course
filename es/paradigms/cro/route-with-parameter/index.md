---
title: Una ruta con parámetro
translations_gpt:
---

{% include menu.html %}

La ruta de la página anterior devolvía siempre el mismo texto. Los servicios reales varían su respuesta según lo que pida el cliente, y la manera más sencilla es leer parte de la **URL** como parámetro. En una ruta de Cro, un segmento posterior a la ruta fija se convierte en una variable de la firma:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello', $name {
        content 'text/plain', "Hello, $name!";
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

La parte interesante es la firma `-> 'hello', $name`: coincide con una ruta de dos segmentos, el literal `hello` y después cualquier cosa, capturada en `$name`. El resto del programa es el mismo andamiaje de servidor de la página anterior. Una petición de `/hello/Anna` liga `$name` a `Anna` y devuelve `Hello, Anna!`; `/hello/Bob` devuelve `Hello, Bob!`. Una ruta, una respuesta distinta para cada nombre:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Este ejemplo necesita Cro instalado (`zef install cro`).

Los parámetros son lo que permite a una ruta seguir siendo pequeña mientras atiende toda una familia de rutas. Una ruta puede tomar varios segmentos, coincidir solo con ciertas formas, leer cadenas de consulta y devolver JSON, pero todo se construye sobre esta única idea: nombra en la firma las partes variables de la URL y úsalas en la respuesta.

Las rutas que no coinciden con ninguna ruta declarada no son problema tuyo: Cro las responde por su cuenta con `404 Not Found`. Y cuando una ruta *sí* coincide pero no puede entregar nada — el nombre no encuentra nada, pongamos —, llama a `not-found` dentro del manejador para enviar ese mismo 404 deliberadamente. El **método** se comprueba con tanto rigor como la ruta: este bloque solo declara `get`, así que una petición `HEAD` o `POST` a la misma ruta se responde con `405 Method Not Allowed`. Puedes verlo tú mismo con `curl -I`, que envía `HEAD` en lugar de `GET`.

Un servicio es solo la mitad del cuadro, sin embargo: algo tiene que llamarlo. La página siguiente da la vuelta a Cro y usa su **cliente** para hablar con un servidor como los que acabas de construir.

{% include nav.html %}
