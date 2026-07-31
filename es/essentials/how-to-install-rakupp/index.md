---
title: Cómo instalar Raku++
translations_gpt:
---

{% include menu.html %}

Raku++ se distribuye a través de su repositorio de GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Instalarlo te da un único ejecutable llamado `rakupp`.

## Binarios

Para la versión actual hay binarios ya preparados para Windows, macOS y Linux. Descarga el de tu sistema operativo desde la página de versiones del repositorio: no hay nada más que configurar, porque Raku++ no tiene ninguna máquina virtual aparte que instalar.

## Compilar desde el código fuente

Como Raku++ está escrito en C++, también puedes compilarlo tú mismo a partir del código fuente del repositorio. El repositorio explica qué herramientas hacen falta y cómo compilarlo.

## Números de versión

Puedes comprobar qué versión tienes con la opción `--version`:

```console
$ rakupp --version
Raku++ (rakupp) 1.5.2 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

La línea te dice la versión de Raku++ (`1.5.2`) y qué versión del lenguaje Raku toma como objetivo (`6.d`, con algunas funcionalidades de `6.e`). Compárala con el mensaje de versión de Rakudo en la [página de instalación de Rakudo](/es/essentials/how-to-install-rakudo) para ver cómo se presenta cada compilador.

{% include nav.html %}
