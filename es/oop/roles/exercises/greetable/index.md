---
title: Una caja con tamaño
translations_gpt:
---

{% include menu.html %}

## Problema

Define un rol `Sized` con un método `describe` que devuelva la cadena `size is <tamaño>`, usando `self.size`.

Después define una clase `Box` que asuma el rol `Sized` y tenga un atributo `size`. Crea una caja de tamaño `10`, imprime el resultado de llamar a `describe` sobre ella y después, en una segunda línea, imprime si la caja `~~ Sized`, es decir, si se reconoce como portadora del rol.

## Ejemplo

El programa imprime:

```
size is 10
True
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
