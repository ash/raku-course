---
title: Contextos
---

{% include menu.html %}

Un valor en Raku puede a veces comportarse de manera diferente al adaptarse al _contexto_ en el que se usa. Por ejemplo, el mismo array puede actuar como un número (su longitud), como una cadena (sus elementos unidos), o como un valor de verdad (si el array está vacío o no), dependiendo de lo que el código circundante solicite.

Entender los contextos explica mucho de Raku que de otro modo parecería sorprendente: por qué `+@array` es un número, por qué un array puesto en un escalar se comporta como un solo elemento, y por qué `if @array` comprueba si está vacío. Esta sección cubre los contextos principales.

{% include nav.html %}
