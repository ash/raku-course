---
title: Canales
translations_gpt:
---

{% include menu.html %}

Un _canal_ es una cola segura para hilos: una parte del programa mete valores, otra los saca, y Raku se encarga por ti de todos los bloqueos. Los canales son la manera estándar de pasar con seguridad un flujo de valores entre tareas concurrentes: un productor y un consumidor.

Esta sección muestra cómo enviar y recibir valores a través de un canal, y cómo cerrar un canal señala que no llegarán más valores.

{% include nav.html %}
