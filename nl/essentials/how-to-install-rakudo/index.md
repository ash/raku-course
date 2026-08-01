---
title: Hoe Rakudo te installeren
translations_gpt:
---

{% include menu.html %}

Om een programma in Raku uit te voeren moet je een compiler geïnstalleerd hebben. Deze cursus gebruikt Rakudo; de andere compiler, [Raku++](/nl/essentials/the-rakupp-compiler), installeer je [apart](/nl/essentials/how-to-install-rakupp). Ga naar [de website van Rakudo](https://rakudo.org) om de versie te downloaden die bij jouw besturingssysteem past.

## Bronnen

Een installatieprogramma voor jouw systeem vind je op [rakudo.org/downloads](https://rakudo.org/downloads). Er bestaan versies voor alle grote besturingssystemen: Windows, Mac OS en Linux. Er is ook broncode die je zelf kunt compileren.

## Docker-images

Rakudo is ook beschikbaar als docker-image. Je kunt het zowel gebruiken om programma's uit te voeren als om kleine scripts te proberen in een REPL-shell. Alle instructies staan op [github.com/Raku/docker](https://github.com/Raku/docker).

## Versienummers

Het versienummeringssysteem van Rakudo bouwt het versienummer op uit twee delen: het jaar en de maand van de uitgavedatum. Zo zie je in één oogopslag hoe vers je compiler is. Voer de volgende opdrachtregel uit om het versienummer te zien:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Je ziet hier drie versienummers. Het eerste is de versie van Rakudo zelf: `v2026.06`. Dan volgt de versie van de taal Raku: `v6.d`. De updates krijgen momenteel de volgende letter als kleine versie, bijvoorbeeld `v6.e`, enzovoort. Ten slotte zien we de naam van de virtuele machine die deze compiler gebruikt: MoarVM versie `2026.06`.

{% include nav.html %}
