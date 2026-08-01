---
title: Raku, Rakudo en Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** is de naam van de programmeertaal, terwijl een **compiler** het programma is dat je code leest en uitvoert. Raku is niet aan één compiler gebonden: deze cursus gebruikt **Rakudo**, de gevestigde en meest volledige, en daarnaast bestaat er een nieuwere compiler die **Raku++** heet.

## Meer dan één compiler

Het ontwerp van Raku schrijft niet voor welke compiler je moet gebruiken. Bij de ontwerpdocumenten hoort een verzameling testgevallen genaamd Roast; iedereen mag een compiler schrijven, en slaagt die voor die tests, dan is het een Raku-compiler.

Lange tijd was Rakudo de enige volwassen implementatie, maar dat is niet langer zo. In juli 2026 verscheen een tweede compiler — **Raku++** (het uitvoerbare bestand heet `rakupp`), geschreven in C++. Hij is jong en dekt de taal nog niet helemaal, maar slaagt al voor een groot deel van de Roast-suite en start opmerkelijk snel. Deze cursus gebruikt Rakudo voor de voorbeelden, maar wat je leert is de taal Raku zelf, en veel daarvan draait ongewijzigd ook op Raku++. De volgende pagina's bekijken beide compilers — Rakudo en Raku++ — om de beurt, en hoe je ze installeert.

## Externe links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ op GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
