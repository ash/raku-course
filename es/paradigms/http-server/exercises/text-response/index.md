---
title: La ruta en mayúsculas
translations_gpt:
---

{% include menu.html %}

## Problema

Haz que el servidor haga un trabajo real con la entrada del cliente, en lugar de devolver una cadena fija. Escribe un servidor que, en un **bucle** (como en la página anterior), lea cada petición, tome la **ruta** solicitada y la devuelva **en mayúsculas**, de modo que una petición de `/hello` responda con `HELLO`. La ruta es la segunda palabra de la primera línea de la petición (`GET /hello HTTP/1.0`); quita la `/` inicial antes de pasarla a mayúsculas. Sigue atendiendo petición tras petición; detenlo con Ctrl-C.

## Ejemplo

Pedir una ruta con `curl` la devuelve en mayúsculas:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
