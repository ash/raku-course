---
title: Una sección Pod
translations_gpt: true
---

{% include menu.html %}

## Problema

`$=pod` permite que un programa recorra su propia documentación. Escribe un bloque `=begin pod` … `=end pod` que contenga un encabezado de nivel superior y un párrafo. Luego accede al primer bloque Pod con `$=pod[0]` e imprime cuántas piezas de contenido contiene — el encabezado y el párrafo cuentan como dos.

## Ejemplo

El programa imprime:

```
2
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
