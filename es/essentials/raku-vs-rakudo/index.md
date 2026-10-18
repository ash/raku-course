---
title: Raku, Rakudo, Raku++ y mutsu
translations_gpt:
---

{% include menu.html %}

**Raku** es el nombre del lenguaje de programación, mientras que un **compilador** es el programa que lee su código y lo ejecuta. Raku no está atado a un único compilador: este curso usa **Rakudo**, el consolidado, y también existen otros más recientes — **Raku++** y **mutsu**.

## Más de un compilador

El diseño de Raku no impone qué compilador usar. Los documentos de diseño vienen con un conjunto de casos de prueba llamado Roast; cualquiera puede escribir un compilador y, si pasa esas pruebas, es un compilador de Raku.

Durante mucho tiempo Rakudo fue la única implementación madura, pero eso ya no es así. En julio de 2026 apareció un segundo compilador — **Raku++** (su ejecutable se llama `rakupp`), escrito en C++. Su versión 5.4.1 pasa la suite Roast completa, y arranca notablemente rápido. Este curso usa Rakudo para sus ejemplos, pero lo que usted está aprendiendo es el lenguaje Raku en sí, y casi todo ello se ejecuta sin cambios también en Raku++.

Existe además una tercera implementación: **mutsu**, un intérprete escrito en Rust por Tokuhiro Matsuno. Compila Raku a bytecode para una máquina virtual propia, y también funciona dentro de un navegador web mediante WebAssembly — su sitio web ofrece un tutorial de Raku y un campo de pruebas construidos sobre él. mutsu está en pleno desarrollo y, en palabras de su autor, todavía no es apto para su uso en producción, aunque ya pasa casi todos los archivos de pruebas de Roast.

Las páginas siguientes examinan por turno cada uno de los tres — Rakudo, Raku++ y mutsu — y cómo instalarlos.

## Enlaces externos

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ en GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
