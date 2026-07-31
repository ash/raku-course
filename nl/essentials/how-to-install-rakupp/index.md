---
title: Raku++ installeren
translations_gpt:
---

{% include menu.html %}

Raku++ wordt verspreid via zijn GitHub-repository, [github.com/ash/rakupp](https://github.com/ash/rakupp). Bij installatie krijg je één uitvoerbaar bestand met de naam `rakupp`.

## Binaire bestanden

Kant-en-klare binaire bestanden van de huidige uitgave zijn beschikbaar voor Windows, macOS en Linux. Download het bestand voor jouw besturingssysteem van de releasespagina van de repository — er is verder niets in te stellen, omdat Raku++ geen aparte virtuele machine heeft die geïnstalleerd moet worden.

## Bouwen vanaf de broncode

Omdat Raku++ in C++ geschreven is, kun je het ook zelf bouwen vanaf de broncode in de repository. De repository legt uit welke hulpmiddelen je nodig hebt en hoe je het compileert.

## Versienummers

Je kunt met de optie `--version` controleren welke versie je hebt:

```console
$ rakupp --version
Raku++ (rakupp) 1.5.2 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

De regel vertelt je welke uitgave van Raku++ zelf je hebt (`1.5.2`) en op welke versie van de taal Raku die mikt (`6.d`, met enkele mogelijkheden uit `6.e`). Vergelijk dit met de versieregel van Rakudo op de [installatiepagina van Rakudo](/nl/essentials/how-to-install-rakudo) om te zien hoe de twee compilers zichzelf melden.

{% include nav.html %}
