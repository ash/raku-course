---
title: Hilos
translations_gpt:
---

{% include menu.html %}

Un _hilo_ es una línea de ejecución independiente que corre junto al resto de tu programa. Arrancar un hilo permite que un trabajo ocurra en segundo plano mientras el programa principal sigue adelante.

Los hilos son la herramienta de concurrencia de más bajo nivel de Raku. En el código de todos los días recurrirás normalmente a las [_promesas_](/es/paradigms/promises) de más alto nivel de la sección siguiente, que están construidas sobre los hilos pero son mucho más fáciles de combinar. Aun así, merece la pena ver el mecanismo básico: cómo arrancar un hilo y cómo esperarlo.

{% include nav.html %}
