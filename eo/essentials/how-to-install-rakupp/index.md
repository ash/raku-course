---
title: Kiel instali Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

Raku++ estas distribuata per sia retejo, [raku.online](https://raku.online), kaj per sia deponejo en GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Instali ĝin donas al vi unu solan rulebladosieron nomatan `rakupp` — estas nenio alia por agordi, ĉar Raku++ havas neniun apartan virtualan maŝinon por instali.

## La instalilo

Sur macOS, Linukso kaj la BSD-sistemoj unu sola komando elŝutas la binaraĵon por via maŝino, kontrolas ĝin kaj metas `rakupp` en vian `PATH`. Ĝi ne bezonas administrantajn rajtojn:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

Sur Vindozo, rulu anstataŭe ĉi tion en fenestro de PowerShell, aŭ elŝutu la instalan asistanton, `rakupp-setup-windows-x64.exe`, el la eldona paĝo de la deponejo:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

La instalilo demandas, ĉu vi volas havi Raku++ ankaŭ sub la nomo `raku`. Poste malfermu novan terminalon, por ke la nova `PATH` ekvalidu. Pli malfrue `rakupp upgrade` anstataŭigas ĝin per la plej nova eldono.

## Aliaj manieroj instali

* Sur macOS per Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Per Docker, sen instali ion ajn: `docker run --rm -it ghcr.io/ash/rakupp` lanĉas la interagan ŝelon REPL.
* Pretaj arkivoj por ĉiu platformo troviĝas en la eldona paĝo de la deponejo.
* Ĉar Raku++ estas skribita en C++, vi ankaŭ povas konstrui ĝin mem el la fontkodo; la deponejo klarigas, kiujn ilojn vi bezonas.

## Versiaj numeroj

Vi povas kontroli, kiun version vi havas, per la opcio `--version`:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

La linio diras al vi la eldonon de Raku++ mem (`5.4.1`), la daton, kiam ĝi estis konstruita, kaj la platformon, por kiu la binaraĵo estas destinita. La versio de la lingvo Raku estas aparta afero, kaj vi povas demandi pri ĝi la lingvon mem:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Komparu tion kun la versia mesaĝo de Rakudo en la [paĝo pri instalado de Rakudo](/eo/essentials/how-to-install-rakudo) por vidi, kiel la du kompililoj raportas sin.

{% include nav.html %}
