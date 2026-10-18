---
title: mutsu installeren
translations_gpt:
---

{% include menu.html %}

mutsu publiceert kant-en-klare builds voor macOS en Linux, zowel voor Intel/AMD- als voor ARM-processors, op de releasespagina van zijn GitHub-repository, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Elke build bevat twee uitvoerbare bestanden: `mutsu` zelf en `mzef`, zijn pakketbeheerder.

## Met mise

De eenvoudigste manier om een uitgave te installeren is [mise](https://mise.jdx.dev/), een hulpmiddel dat ontwikkelaarstools installeert en bijwerkt. Eén opdracht downloadt de build voor jouw machine en zet zowel `mutsu` als `mzef` in je `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Met Docker

Op elk systeem waarop Docker draait, Windows inbegrepen, kun je mutsu gebruiken zonder hem te installeren. Dit start de interactieve REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

En dit voert een programma uit de huidige map uit:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Bouwen vanaf de broncode

mutsu is in Rust geschreven, dus je kunt hem ook zelf met Cargo bouwen vanaf de broncode in zijn repository; de repository legt de details uit.

## Versienummers

Je kunt met de optie `--version` controleren welke versie je hebt:

```console
$ mutsu --version
mutsu 0.24.0
```

Dat is de uitgave van mutsu zelf. Net als bij de andere compilers kun je de versie van de taal Raku aan de taal zelf vragen:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Vergelijk dit met hoe [Rakudo](/nl/essentials/how-to-install-rakudo) en [Raku++](/nl/essentials/how-to-install-rakupp) zichzelf melden.

{% include nav.html %}
