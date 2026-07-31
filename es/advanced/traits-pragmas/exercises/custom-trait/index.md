---
title: Un trait personalizado
translations_gpt:
---

{% include menu.html %}

## Problema

Un trait personalizado puede recibir un argumento, no solo estar presente o ausente. Escribe un trait `is role(...)` que acepte una cadena y registre, en un hash indexado por el nombre de la subrutina, el rol asignado a esa subrutina.

Aplica `is role('admin')` a una subrutina `login`, luego imprime el rol almacenado para `login`.

## Ejemplo

El programa imprime:

```
admin
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
