---
title: Raku++ installeren
translations_gpt:
---

{% include menu.html %}

Raku++ wordt verspreid via zijn website, [raku.online](https://raku.online), en zijn GitHub-repository, [github.com/ash/rakupp](https://github.com/ash/rakupp). Bij installatie krijg je één uitvoerbaar bestand met de naam `rakupp` — er is verder niets in te stellen, omdat Raku++ geen aparte virtuele machine heeft die geïnstalleerd moet worden.

## Het installatieprogramma

Op macOS, Linux en de BSD's downloadt één opdracht de build voor jouw machine, controleert die en zet `rakupp` in je `PATH`. Je hebt daar geen beheerdersrechten voor nodig:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

Op Windows voer je in plaats daarvan dit uit in een PowerShell-venster, of je downloadt de installatiewizard, `rakupp-setup-windows-x64.exe`, van de releasespagina van de repository:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

Het installatieprogramma vraagt of je Raku++ ook onder de naam `raku` wilt hebben. Open daarna een nieuwe terminal, zodat het nieuwe `PATH` van kracht wordt. Later vervangt `rakupp upgrade` het door de nieuwste uitgave.

## Andere manieren om te installeren

* Op macOS met Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Met Docker, zonder iets te installeren: `docker run --rm -it ghcr.io/ash/rakupp` start de interactieve REPL.
* Kant-en-klare archieven voor elk platform staan op de releasespagina van de repository.
* Omdat Raku++ in C++ geschreven is, kun je het ook zelf bouwen vanaf de broncode; de repository legt uit welke hulpmiddelen je nodig hebt.

## Versienummers

Je kunt met de optie `--version` controleren welke versie je hebt:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

De regel vertelt je welke uitgave van Raku++ zelf je hebt (`5.4.1`), op welke datum die gebouwd is en voor welk platform het binaire bestand bedoeld is. De versie van de taal Raku is iets anders, en die kun je aan de taal zelf vragen:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Vergelijk dit met de versieregel van Rakudo op de [installatiepagina van Rakudo](/nl/essentials/how-to-install-rakudo) om te zien hoe de twee compilers zichzelf melden.

{% include nav.html %}
