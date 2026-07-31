---
title: Figuras que comparten un rol
translations_gpt:
---

{% include menu.html %}

## Problema

Define un rol `Shape` que exija un método `area`, y crea después clases `Circle` y
`Square` que hagan el rol.

Escribe una subrutina `describe` cuyo parámetro esté *tipado* como `Shape`, de modo
que acepte cualquier forma y rechace lo que no lo sea. Debe imprimir el área de la
forma etiquetada con el nombre de su clase. Llámala para un círculo de radio `2` y un
cuadrado de lado `3`.

La subrutina nunca comprueba qué clase de forma ha recibido: como su parámetro es un
`Shape`, el objeto tiene garantizado un método `area`, así que la misma llamada a
`.area` funciona con cualquier forma que entre. Eso es lo que te da el rol: un único
tipo que puedes exigir, y un solo fragmento de código que trata de manera uniforme a
todas las clases que lo hacen.

## Ejemplo

El programa imprime:

```
Circle: 12.56636
Square: 9
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
