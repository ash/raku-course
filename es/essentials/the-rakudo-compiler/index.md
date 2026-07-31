---
title: El compilador Rakudo
translations_gpt:
---

{% include menu.html %}

**Rakudo** es la implementación de referencia de Raku y el compilador que usa este curso. Hoy es la forma más completa y más probada de ejecutar Raku, así que cuando alguien dice «el compilador de Raku» normalmente se refiere a Rakudo.

Rakudo está escrito en buena parte en el propio Raku, junto con un lenguaje de arranque más pequeño llamado NQP («Not Quite Perl»). Compila tu programa a bytecode y lo ejecuta en una máquina virtual llamada **MoarVM**, que obtienes automáticamente al instalar Rakudo. Como Rakudo aspira a cubrir el lenguaje entero, es la opción más segura cuando necesitas que funcione hasta el último rincón de Raku.

Rakudo implementa Raku 6.d y se publica con frecuencia, así que las correcciones y las novedades te llegan pronto.

## La máquina virtual

Por omisión Rakudo se ejecuta sobre MoarVM, una máquina virtual creada específicamente para Raku. El diseño no ata Rakudo a una sola máquina — también puede construirse sobre otras máquinas virtuales — pero MoarVM es el destino estándar y bien soportado, y es el que este curso da por sentado. Ahí está la diferencia principal con [Raku++](/es/essentials/the-rakupp-compiler), que está escrito en C++ y no necesita ninguna máquina virtual propia.

## Código fuente y enlaces

Rakudo es de código abierto y se desarrolla a la vista de todos:

* [rakudo.org](https://rakudo.org)
* [Rakudo en GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
