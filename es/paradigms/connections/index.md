---
title: Establecer conexiones remotas
translations_gpt:
---

{% include menu.html %}

La última subparte del curso se vuelve hacia la programación _web_: hablar con otras máquinas por la red. Construimos desde abajo: una conexión de red en crudo, después un cliente HTTP sencillo, un servidor HTTP sencillo y, por último, un vistazo al framework Cro.

A diferencia del resto del curso, estos ejemplos necesitan una **conexión de red** para ejecutarse, y los últimos necesitan módulos que instalas tú. El código está escrito para compilar y para funcionar cuando lo ejecutes contra un servidor real, pero su salida no se puede mostrar como sí se puede con los ejemplos sin conexión. Cada página indica lo que necesita.

Empezamos por el cimiento de todo el código de red: un _socket_, la tubería de dos direcciones entre dos programas a través de una red.

{% include nav.html %}
