---
title: react y whenever
translations_gpt:
---

{% include menu.html %}

Enganchar un solo supply está bien, pero los programas reactivos de verdad observan a menudo **varios** flujos a la vez y reaccionan al que produzca el valor siguiente. Raku tiene una sintaxis dedicada a esto: el bloque `react`, con uno o más bloques `whenever` dentro.

Un bloque `react` prepara las reacciones y después espera, ejecutando el cuerpo de cada `whenever` según emite su supply, hasta que todos los supplies han terminado. Esta sección muestra cómo trabajan juntos los dos.

{% include nav.html %}
