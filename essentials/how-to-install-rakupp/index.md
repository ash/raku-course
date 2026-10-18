---
title: How to install Raku++
---

{% include menu.html %}

Raku++ is distributed through its website, [raku.online](https://raku.online), and its GitHub repository, [github.com/ash/rakupp](https://github.com/ash/rakupp). Installing it gives you a single executable called `rakupp` — there is nothing else to set up, as Raku++ has no separate virtual machine to install.

## The installer

On macOS, Linux, and the BSDs, one command downloads the build for your machine, checks it, and puts `rakupp` on your `PATH`. It does not need administrator rights:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

On Windows, run this in a PowerShell window instead, or download the setup wizard, `rakupp-setup-windows-x64.exe`, from the repository’s releases page:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

The installer asks whether you also want Raku++ under the name `raku`. Open a new terminal afterwards, so that the new `PATH` takes effect. Later, `rakupp upgrade` replaces it with the newest release.

## Other ways to install

* On macOS with Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* With Docker, without installing anything: `docker run --rm -it ghcr.io/ash/rakupp` starts the interactive REPL.
* Ready-made archives for each platform are on the repository’s releases page.
* Because Raku++ is written in C++, you can also build it yourself from the source code; the repository explains which tools you need.

## Version numbers

You can check which version you have with the `--version` option:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

The line tells you the release of Raku++ itself (`5.4.1`), the date it was built, and the platform the binary is for. The version of the Raku language is a separate thing, and you can ask the language itself:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Compare this with the Rakudo version banner on the [Rakudo installation page](/essentials/how-to-install-rakudo) to see how the two compilers report themselves.

{% include nav.html %}
