---
title: How to install mutsu
---

{% include menu.html %}

mutsu publishes ready-made builds for macOS and Linux, for both Intel/AMD and ARM processors, on the releases page of its GitHub repository, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Each build contains two executables: `mutsu` itself and `mzef`, its package manager.

## With mise

The simplest way to install a release is [mise](https://mise.jdx.dev/), a tool that installs and updates developer tools. One command downloads the build for your machine and puts both `mutsu` and `mzef` on your `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## With Docker

On any system that runs Docker, Windows included, you can use mutsu without installing it. This starts the interactive REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

And this runs a program from the current directory:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Building from source

mutsu is written in Rust, so you can also build it yourself with Cargo from the source code in its repository; the repository explains the details.

## Version numbers

Check which version you have with the `--version` option:

```console
$ mutsu --version
mutsu 0.24.0
```

That is the release of mutsu itself. As with the other compilers, the version of the Raku language is something you can ask the language:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Compare this with how [Rakudo](/essentials/how-to-install-rakudo) and [Raku++](/essentials/how-to-install-rakupp) report themselves.

{% include nav.html %}
