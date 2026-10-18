---
title: Cómo instalar Raku++
translations_gpt:
---

{% include menu.html %}

Raku++ se distribuye a través de su sitio web, [raku.online](https://raku.online), y de su repositorio de GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Instalarlo te da un único ejecutable llamado `rakupp`: no hay nada más que configurar, porque Raku++ no tiene ninguna máquina virtual aparte que instalar.

## El instalador

En macOS, Linux y los sistemas BSD, un solo comando descarga la versión adecuada para tu máquina, la verifica y pone `rakupp` en tu `PATH`. No necesita permisos de administrador:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

En Windows, ejecuta en cambio lo siguiente en una ventana de PowerShell, o descarga el asistente de instalación, `rakupp-setup-windows-x64.exe`, desde la página de versiones del repositorio:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

El instalador te pregunta si quieres tener Raku++ también con el nombre `raku`. Después abre una terminal nueva para que el nuevo `PATH` surta efecto. Más adelante, `rakupp upgrade` lo sustituye por la versión más reciente.

## Otras formas de instalarlo

* En macOS con Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Con Docker, sin instalar nada: `docker run --rm -it ghcr.io/ash/rakupp` inicia el REPL interactivo.
* En la página de versiones del repositorio hay archivos comprimidos ya preparados para cada plataforma.
* Como Raku++ está escrito en C++, también puedes compilarlo tú mismo a partir del código fuente; el repositorio explica qué herramientas hacen falta.

## Números de versión

Puedes comprobar qué versión tienes con la opción `--version`:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

La línea te dice la versión de Raku++ (`5.4.1`), la fecha en que se compiló y la plataforma para la que es el binario. La versión del lenguaje Raku es otra cosa, y puedes preguntársela al propio lenguaje:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Compáralo con el mensaje de versión de Rakudo en la [página de instalación de Rakudo](/es/essentials/how-to-install-rakudo) para ver cómo se presenta cada compilador.

{% include nav.html %}
