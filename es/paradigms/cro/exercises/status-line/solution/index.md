---
title: 'Solución: Estado con un cliente'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Puedes encontrar el código fuente en el archivo [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Salida

```
200
```

## Comentarios

1. `Cro::HTTP::Client.get` devuelve una promesa — una petición de red termina más tarde —, así que la esperamos con `await`.

1. El objeto de respuesta ya conoce su `.status`, así que obtenemos `200` directamente, sin enviar el texto de la petición ni analizar la respuesta a mano. Compáralo con la versión de socket en crudo: el módulo hace por ti todo el trabajo del protocolo.

{% include nav.html %}
