---
title: El compilador Raku++
translations_gpt:
---

{% include menu.html %}

**Raku++** — cuyo ejecutable se llama `rakupp` — es un segundo compilador de Raku, publicado por primera vez en julio de 2026. Mientras que Rakudo se ejecuta sobre la máquina virtual MoarVM, Raku++ está escrito en **C++** y no necesita ninguna máquina virtual propia.

Es a la vez un **intérprete** y un **compilador**: puede ejecutar un programa directamente o traducirlo a código nativo para ganar velocidad. Como no hay ningún runtime pesado que arrancar, `rakupp` se pone en marcha en unos pocos milisegundos, lo que lo hace agradable para guiones cortos y para el trabajo diario en la línea de comandos. Su autor lo describe como el compilador de Raku más rápido.

Raku++ implementa Raku 6.d (con algunas funcionalidades de 6.e). En la versión 1.5.2 ya pasa alrededor del 90 % de la suite de pruebas Roast — el conjunto oficial de pruebas de Raku. Es joven, así que todavía no cubre todo el lenguaje, pero avanza deprisa.

## Modos de intérprete y de compilador

Ejecuta un programa directamente, igual que harías con Rakudo:

```console
$ rakupp hello.raku
```

O pídele a Raku++ que convierta un programa en un ejecutable nativo autónomo, que corre aún más rápido:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Para aprender a diario basta con el modo intérprete; los modos de compilación están ahí para cuando quieras la velocidad extra.

## Código fuente

Raku++ es de código abierto. Puedes encontrarlo, junto con los binarios de las versiones y las instrucciones de compilación, en [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
