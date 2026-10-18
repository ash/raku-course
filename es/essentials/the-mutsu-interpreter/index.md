---
title: El intérprete mutsu
translations_gpt:
---

{% include menu.html %}

**mutsu** es una tercera implementación de Raku, escrita en **Rust** por Tokuhiro Matsuno. Igual que Rakudo, compila tu programa a bytecode y lo ejecuta en una máquina virtual — pero esa máquina virtual es propia, integrada en el ejecutable `mutsu`, en lugar de MoarVM.

mutsu implementa Raku 6.d y está en pleno desarrollo. Su autor dice claramente que todavía no es apto para su uso en producción, pero ya pasa casi todos los archivos de pruebas de Roast, así que casi todos los programas de este curso se ejecutan en él sin cambios.

Hay una carencia que importa mientras aprendes: todavía faltan algunas comprobaciones en tiempo de compilación. Lo más visible es que, en la versión 0.24.0, mutsu no informa antes de ejecutar el programa de una variable que olvidaste declarar, como sí hacen Rakudo y Raku++. Cuando el curso muestre un mensaje de error así, prueba ese ejemplo con uno de los otros dos compiladores.

## Raku en el navegador

mutsu también puede compilarse a WebAssembly, de modo que funciona dentro de una página web. Su sitio web, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), lo aprovecha para ofrecer una introducción a Raku en inglés y en japonés, un tutorial práctico y un campo de pruebas donde puedes ejecutar Raku sin instalar nada — todo lo que hay en esas páginas lo ejecuta el propio mutsu.

## Módulos

mutsu trae su propia copia del gestor de paquetes zef, llamada `mzef`, así que se le pueden instalar módulos de Raku de la manera habitual, con `mzef install` seguido del nombre del módulo.

## Código fuente

mutsu es de código abierto. Puedes encontrarlo, junto con los binarios de las versiones y las instrucciones de compilación, en [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
