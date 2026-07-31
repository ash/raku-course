---
title: Clases de acción
translations_gpt:
---

{% include menu.html %}

Los bloques `{ make … }` en línea funcionan, pero llenan de lógica una gramática y la hacen más difícil de leer. La solución ordenada es una _clase de acciones_: una clase aparte cuyos métodos llevan el nombre de los tokens de la gramática y aportan el `make` de cada uno.

Esta sección muestra cómo escribir una clase de acciones, cómo entregársela a `.parse` y cuándo preferirla a las acciones en línea.

{% include nav.html %}
