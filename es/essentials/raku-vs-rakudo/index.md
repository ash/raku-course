---
title: Raku, Rakudo y Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** es el nombre del lenguaje de programación, mientras que un **compilador** es el programa que lee su código y lo ejecuta. Raku no está atado a un único compilador: este curso usa **Rakudo**, el consolidado y más completo, y además existe un compilador más reciente llamado **Raku++**.

## Más de un compilador

El diseño de Raku no impone qué compilador usar. Los documentos de diseño vienen con un conjunto de casos de prueba llamado Roast; cualquiera puede escribir un compilador y, si pasa esas pruebas, es un compilador de Raku.

Durante mucho tiempo Rakudo fue la única implementación madura, pero eso ya no es así. En julio de 2026 apareció un segundo compilador — **Raku++** (su ejecutable se llama `rakupp`), escrito en C++. Es joven y todavía no cubre todo el lenguaje, pero ya pasa buena parte de la suite Roast y arranca notablemente rápido. Este curso usa Rakudo para sus ejemplos, pero lo que usted está aprendiendo es el lenguaje Raku en sí, y mucho de ello se ejecuta sin cambios también en Raku++. Las páginas siguientes examinan cada compilador — Rakudo y Raku++ — por turno, y cómo instalarlos.

## Enlaces externos

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ en GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
