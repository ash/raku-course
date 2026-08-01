---
title: Cómo instalar Rakudo
translations_gpt:
---

{% include menu.html %}

Para ejecutar un programa en Raku necesita tener un compilador instalado. Este curso usa Rakudo; el otro compilador, [Raku++](/es/essentials/the-rakupp-compiler), se instala [aparte](/es/essentials/how-to-install-rakupp). Visite [el sitio web de Rakudo](https://rakudo.org) para descargar la versión adecuada para su sistema operativo.

## Fuentes

Puede descargar un instalador para su sistema en [rakudo.org/downloads](https://rakudo.org/downloads). Existen versiones para todos los sistemas operativos principales: Windows, Mac OS y Linux. También están los códigos fuente, que puede compilar usted mismo.

## Imágenes de Docker

Rakudo también está disponible como imagen de docker. Puede usarla tanto para ejecutar programas como para probar pequeños guiones en un intérprete REPL. Encontrará todas las instrucciones en [github.com/Raku/docker](https://github.com/Raku/docker).

## Números de versión

El sistema de numeración de Rakudo forma el número de versión en dos partes: el año y el mes de la fecha de publicación. Así puede ver de un vistazo cuán reciente es su compilador. Ejecute la siguiente línea de órdenes para ver su número de versión:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Aquí ve tres números de versión. El primero es la versión de Rakudo en sí: `v2026.06`. Luego viene la versión del lenguaje Raku: `v6.d`. Por ahora las actualizaciones recibirán la letra siguiente como parte menor de la versión, por ejemplo `v6.e`, etc. Por último vemos el nombre de la máquina virtual que usa este compilador: MoarVM versión `2026.06`.

{% include nav.html %}
