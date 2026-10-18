---
title: Cómo instalar mutsu
translations_gpt:
---

{% include menu.html %}

mutsu publica versiones ya compiladas para macOS y Linux, tanto para procesadores Intel/AMD como ARM, en la página de versiones de su repositorio de GitHub, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Cada una contiene dos ejecutables: el propio `mutsu` y `mzef`, su gestor de paquetes.

## Con mise

La forma más sencilla de instalar una versión es [mise](https://mise.jdx.dev/), una herramienta que instala y actualiza herramientas de desarrollo. Un solo comando descarga la versión adecuada para tu máquina y pone tanto `mutsu` como `mzef` en tu `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Con Docker

En cualquier sistema que ejecute Docker, Windows incluido, puedes usar mutsu sin instalarlo. Esto inicia el REPL interactivo:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

Y esto ejecuta un programa del directorio actual:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Compilar a partir del código fuente

mutsu está escrito en Rust, así que también puedes compilarlo tú mismo con Cargo a partir del código fuente de su repositorio; el repositorio explica los detalles.

## Números de versión

Comprueba qué versión tienes con la opción `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Esa es la versión del propio mutsu. Como con los otros compiladores, la versión del lenguaje Raku es algo que puedes preguntarle al propio lenguaje:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Compáralo con cómo se presentan [Rakudo](/es/essentials/how-to-install-rakudo) y [Raku++](/es/essentials/how-to-install-rakupp).

{% include nav.html %}
