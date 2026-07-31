---
title: Generadores
translations_gpt:
---

{% include menu.html %}

Un _generador_ es una rutina que produce una serie de valores de uno en uno, entregando cada uno bajo demanda en lugar de construir la lista entera por adelantado. Raku lo escribe con el par `gather` / `take`: dentro de un bloque `gather`, cada `take` entrega un valor a la secuencia resultante, y el bloque se detiene justo ahí hasta que se pide el valor siguiente.

Como los valores se producen perezosamente — solo a medida que se piden —, un generador puede incluso describir una serie sin fin. Esta sección muestra cómo construir secuencias con `gather` y `take`. La maquinaria de más bajo nivel que en realidad extrae esos valores, uno a uno, es el tema de la sección siguiente, [Iteradores](/es/paradigms/iterators).

{% include nav.html %}
