---
title: Pase un manejador a una función
translations_gpt:
---

{% include menu.html %}

## Problema

Un manejador de archivo es un valor ordinario, así que puedes pasarlo a una función como cualquier otro argumento. Escribe una subrutina `log-line` que reciba un manejador y un mensaje y escriba el mensaje en el manejador, en una línea propia.

Abre `log.txt` para escritura, llama a `log-line` tres veces para registrar `started`, `working` y `done`, después cierra el manejador, vuelve a leer el archivo e imprime su contenido.

## Ejemplo

El programa imprime:

```
started
working
done
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
