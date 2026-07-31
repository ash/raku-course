---
title: Supplies
translations_gpt:
---

{% include menu.html %}

Esta subparte trata de la programación _reactiva_: escribir código que responde a un flujo de valores según van llegando, en lugar de pedirlos uno a uno. El tipo central es el _supply_.

Un supply es una fuente de valores a lo largo del tiempo; piénsalo como un flujo al que puedes suscribirte. Enganchas un fragmento de código a un supply, y ese código se ejecuta una vez por **cada** valor que el supply produce. Este estilo de «los valores se te empujan» es lo contrario de extraer valores de una lista, y es exactamente lo que quieres para eventos, mensajes y datos en vivo.

{% include nav.html %}
