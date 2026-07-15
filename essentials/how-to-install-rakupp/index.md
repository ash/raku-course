---
title: How to install Raku++
---

{% include menu.html %}

Raku++ is distributed through its GitHub repository, [github.com/ash/rakupp](https://github.com/ash/rakupp). Installing it gives you a single executable called `rakupp`.

## Binaries

Ready-made binaries of the current release are available for Windows, macOS, and Linux. Download the one for your operating system from the repository’s releases page — there is nothing else to set up, as Raku++ has no separate virtual machine to install.

## Building from source

Because Raku++ is written in C++, you can also build it yourself from the source code in the repository. The repository explains which tools you need and how to compile it.

## Version numbers

You can check which version you have with the `--version` option:

```console
$ rakupp --version
Raku++ (rakupp) 0.5.1 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

The line tells you the release of Raku++ itself (`0.5.1`) and which version of the Raku language it targets (`6.d`, with some `6.e` features). Compare this with the Rakudo version banner on the [Rakudo installation page](/essentials/how-to-install-rakudo) to see how the two compilers report themselves.

{% include nav.html %}
