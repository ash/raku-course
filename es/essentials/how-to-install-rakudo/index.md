---
title: Cómo instalar Rakudo
---

{% include menu.html %}

Para ejecutar un programa en Raku, necesitas tener un compilador instalado. Visita [el sitio web de Rakudo](https://rakudo.org) para descargar la versión adecuada para tu sistema operativo.

Hay dos opciones principales. Puedes instalar el compilador en sí mismo o instalar un paquete Rakudo Star (también escrito como Rakudo *). Rakudo Star incluye un gestor de paquetes y algunos módulos útiles.

## Fuentes

Puedes descargar un instalador para tu sistema en [rakudo.org/downloads](https://rakudo.org/downloads). Existen versiones para todos los principales sistemas operativos: Windows, Mac OS y Linux. También hay códigos fuente que puedes compilar tú mismo.

## Rakudo Star

También es posible instalar el paquete, Rakudo Star, ejecutando el instalador que obtienes en [rakudo.org/star](https://rakudo.org/star). Verifica el número de versión antes de instalarlo. También puedes consultar la página llamada ‘[Paquetes de Rakudo Star de terceros](https://rakudo.org/star/third-party)’ para ver más opciones.

## Imágenes de Docker

Rakudo Star está disponible como una imagen de Docker. Puedes usarla tanto para ejecutar programas como para probar pequeños scripts en una shell REPL. Encuentra todas las instrucciones en [github.com/Raku/docker](https://github.com/Raku/docker).

## Números de versión

El sistema de numeración de versiones de Rakudo forma el número de versión como un número de dos partes: el año y el mes de la fecha de lanzamiento. Puedes ver fácilmente cuán reciente es tu compilador. Ejecuta la siguiente línea de comandos para ver su número de versión:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Aquí puedes ver tres números de versión. El primero es la versión de Rakudo en sí: `v2020.10`. Luego viene la versión del lenguaje Raku: `v6.d`. Las actualizaciones actualmente obtendrán la siguiente letra como parte de la versión menor, por ejemplo, `v6.e`, etc. Finalmente, vemos el nombre de la máquina virtual utilizada en este compilador: MoarVM versión `2020.10`.

{% include nav.html %}