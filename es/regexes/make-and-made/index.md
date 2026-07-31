---
title: El árbol de análisis, make y made
translations_gpt:
---

{% include menu.html %}

El análisis te dice que una cadena encaja en una gramática, y construye un _árbol de análisis_: un objeto de coincidencia con una captura con nombre por cada token. Pero normalmente no quieres el texto en bruto: quieres un **resultado**, el entero `42` y no los caracteres `4` y `2`.

Esta sección muestra cómo recorrer el árbol de análisis y cómo adjuntar a una coincidencia un valor calculado con `make`, para leerlo después con `made`.

{% include nav.html %}
