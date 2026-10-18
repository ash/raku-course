---
title: Quomodo Raku++ installare 🆕
translations_gpt:
---

{% include menu.html %}

Raku++ per suum situm interretialem, [raku.online](https://raku.online), et per suum repositorium GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp), distribuitur. Illud installans unum programma exsecutabile accipis, nomine `rakupp` — nihil aliud parandum est, quia Raku++ nullam machinam virtualem separatam habet quae installanda sit.

## Programma installationis

In macOS, Linux et systematibus BSD unum imperatum versionem machinae tuae aptam deprimit, examinat, et `rakupp` in `PATH` tuum ponit. Iura administratoris non requirit:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

In Windows hoc potius in fenestra PowerShell exsequere, vel ducem installationis, `rakupp-setup-windows-x64.exe`, ex pagina emissionum repositorii deprime:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

Programma installationis rogat num Raku++ etiam sub nomine `raku` habere velis. Deinde terminalem novum aperi, ut novum `PATH` vim habeat. Postea `rakupp upgrade` emissionem novissimam in eius locum ponit.

## Alii modi installandi

* In macOS cum Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Cum Docker, nihil installans: `docker run --rm -it ghcr.io/ash/rakupp` corticem REPL interactivum incipit.
* Archiva compressa parata pro singulis systematibus in pagina emissionum repositorii inveniuntur.
* Quia Raku++ in C++ scriptum est, illud etiam ipse ex codice fonte aedificare potes; repositorium explicat quibus instrumentis egeas.

## Numeri versionum

Quam versionem habeas per optionem `--version` inspicere potes:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

Linea tibi indicat emissionem ipsius Raku++ (`5.4.1`), diem quo aedificatum est, et systema cui binarium destinatur. Versio linguae Raku res separata est, quam ab ipsa lingua quaerere potes:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Hoc cum vexillo versionis Rakudo in [pagina installationis Rakudo](/la/essentials/how-to-install-rakudo) confer, ut videas quomodo duo compilatores se ipsos nuntient.

{% include nav.html %}
