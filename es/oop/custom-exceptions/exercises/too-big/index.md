---
title: Demasiado grande
translations_gpt:
---

{% include menu.html %}

## Problema

Define una clase de excepción personalizada `TooBig` que herede de `Exception` y tenga dos atributos, `value` y `limit`. Su método `message` debe devolver `Value <value> exceeds the limit of <limit>`.

Después recorre los valores `30`, `99` y `60` con un límite de `50`. Para cada valor lanza una `TooBig` solo cuando el valor supere el límite, y usa un phaser `CATCH` con `when TooBig` que imprima el mensaje **y**, en una segunda línea, lea directamente el atributo `limit` de la excepción para imprimir `Try a value up to <limit>.`. Un valor dentro del límite debe limitarse a informar de que está bien.

Esto muestra que la excepción se lanza solo para los números que fallan; los demás pasan de largo, y el bucle sigue en ambos casos.

## Ejemplo

El programa imprime:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
