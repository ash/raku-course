---
title: Estado con un cliente
translations_gpt:
---

{% include menu.html %}

## Problema

Obtén el estado de una página web por la vía fácil: con el **módulo cliente de Cro** en lugar de con un socket en crudo. Usa `Cro::HTTP::Client.get` para pedir `http://example.com/`, espera la respuesta con `await` e imprime su `.status`; no hace falta analizar ningún texto.

> Este ejercicio necesita el módulo Cro instalado (`zef install cro`) y una conexión de red que funcione.

## Ejemplo

Al ejecutarlo, el programa imprime:

```
200
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
