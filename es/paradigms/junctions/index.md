---
title: Junctions
translations_gpt:
---

{% include menu.html %}

Esta subparte se vuelve hacia la programación _concurrente_: hacer más de una cosa a la vez. Raku tiene para ello un juego de herramientas rico y amable: uniones, hilos, promesas y canales. Empezamos por la más suave de todas, la _unión_.

Una unión es un solo valor que contiene **varios** valores a la vez, ligados por una relación lógica: _cualquiera_ de ellos, _todos_ ellos, _uno_ de ellos o _ninguno_ de ellos. Cuando usas una unión en una comparación, Raku prueba todos los valores que hay detrás y combina los resultados. Esto sustituye a menudo un bucle entero por una sola expresión y, entre bastidores, las pruebas pueden ejecutarse en paralelo.

En los primeros tiempos del lenguaje, las uniones tenían otro nombre: _superposiciones cuánticas_, un guiño a la manera en que un valor puede contener muchas posibilidades a la vez, muy parecido a una partícula en física cuántica.

{% include nav.html %}
