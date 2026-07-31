---
title: Recursión
translations_gpt:
---

{% include menu.html %}

Esta parte del curso va más allá de lo cotidiano y examina tres estilos potentes de programación que Raku admite especialmente bien — el _funcional_, el _concurrente_ y el _reactivo_ — para después ponerlos a trabajar construyendo servicios web.

Empezamos por la programación funcional: un estilo construido en torno a subrutinas que reciben y devuelven otras subrutinas, valores que se calculan solo cuando hacen falta y expresiones en lugar de instrucciones paso a paso. La primera idea es la _recursión_: una subrutina que se llama a sí misma.

Una subrutina recursiva resuelve un problema reduciéndolo a una versión más pequeña del mismo problema, hasta que el problema se vuelve lo bastante pequeño como para responderlo directamente. Contar hacia atrás, recorrer un árbol, calcular un factorial: todos son naturalmente recursivos. Esta sección muestra cómo escribir una subrutina recursiva y, no menos importante, cómo detenerla.

{% include nav.html %}
