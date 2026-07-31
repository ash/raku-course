---
title: Flujos de datos
translations_gpt:
---

{% include menu.html %}

Un _flujo_ te permite escribir una cadena de operaciones sobre listas en el orden en que ocurren, como una tubería. En lugar de anidar `map` dentro de `grep` dentro de `sort`, envías los datos de una etapa a la siguiente con el operador de flujo `==>`.

Los flujos se leen con naturalidad de izquierda a derecha y hacen fáciles de seguir las transformaciones de varios pasos. Esta sección presenta el operador de flujo y cómo encadenar varias etapas.

{% include nav.html %}
