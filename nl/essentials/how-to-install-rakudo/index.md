---
title: Hoe Rakudo te installeren
---

{% include menu.html %}

Om een programma in Raku uit te voeren, moet je een compiler geïnstalleerd hebben. Bezoek [de website van Rakudo](https://rakudo.org) om de versie te downloaden die geschikt is voor jouw besturingssysteem.

Er zijn twee hoofdopties. Je kunt de compiler zelf installeren of een Rakudo Star-suite installeren (ook gespeld als Rakudo *). Rakudo Star bevat een pakketbeheerder en een paar nuttige modules.

## Bronnen

Je kunt een installer voor jouw systeem downloaden op [rakudo.org/downloads](https://rakudo.org/downloads). Er bestaan versies voor alle grote besturingssystemen: Windows, Mac OS en Linux. Er zijn ook broncodes die je zelf kunt compileren.

## Rakudo Star

Het is ook mogelijk om de bundel, Rakudo Star, te installeren door de installer uit te voeren die je krijgt op [rakudo.org/star](https://rakudo.org/star). Controleer het versienummer voordat je het installeert. Je kunt ook de pagina genaamd ‘[3rd-Party Rakudo Star Bundle Packages](https://rakudo.org/star/third-party)’ bekijken om meer opties te zien.

## Docker-afbeeldingen

Rakudo Star is beschikbaar als een docker-afbeelding. Je kunt het gebruiken voor zowel het uitvoeren van programma's als voor het testen van kleine scripts in een REPL-shell. Vind alle instructies op [github.com/Raku/docker](https://github.com/Raku/docker).

## Versienummers

Het versienummeringssysteem van Rakudo vormt het versienummer als een tweedelig nummer: het jaar en de maand van de releasedatum. Je kunt gemakkelijk zien hoe recent jouw compiler is. Voer de volgende opdrachtregel uit om het versienummer te zien:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Je ziet hier drie versienummers. Het eerste is de versie van Rakudo zelf: `v2020.10`. Vervolgens komt de versie van de Raku-taal: `v6.d`. De updates krijgen momenteel de volgende letter als een klein versieonderdeel, bijvoorbeeld `v6.e`, enz. Ten slotte zien we de naam van de virtuele machine die in deze compiler wordt gebruikt: MoarVM versie `2020.10`.

{% include nav.html %}