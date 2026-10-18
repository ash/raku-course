---
title: Raku, Rakudo, Raku++ en mutsu
translations_gpt:
---

{% include menu.html %}

**Raku** is de naam van de programmeertaal, terwijl een **compiler** het programma is dat je code leest en uitvoert. Raku is niet aan één compiler gebonden: deze cursus gebruikt **Rakudo**, de gevestigde, en daarnaast bestaan er ook nieuwere — **Raku++** en **mutsu**.

## Meer dan één compiler

Het ontwerp van Raku schrijft niet voor welke compiler je moet gebruiken. Bij de ontwerpdocumenten hoort een verzameling testgevallen genaamd Roast; iedereen mag een compiler schrijven, en slaagt die voor die tests, dan is het een Raku-compiler.

Lange tijd was Rakudo de enige volwassen implementatie, maar dat is niet langer zo. In juli 2026 verscheen een tweede compiler — **Raku++** (het uitvoerbare bestand heet `rakupp`), geschreven in C++. Met versie 5.4.1 slaagt hij voor de volledige Roast-suite, en hij start opmerkelijk snel. Deze cursus gebruikt Rakudo voor de voorbeelden, maar wat je leert is de taal Raku zelf, en bijna alles daarvan draait ongewijzigd ook op Raku++.

Er is ook nog een derde implementatie: **mutsu**, een interpreter in Rust, geschreven door Tokuhiro Matsuno. Hij compileert Raku naar bytecode voor een eigen virtuele machine en draait via WebAssembly ook in een webbrowser — de website van mutsu heeft een Raku-tutorial en een speeltuin die daarop gebouwd zijn. mutsu wordt actief ontwikkeld en is volgens de auteur zelf nog niet geschikt voor productiegebruik, al slaagt hij nu al voor bijna alle testbestanden van Roast.

De volgende pagina's bekijken alle drie om de beurt — Rakudo, Raku++ en mutsu — en hoe je ze installeert.

## Externe links

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ op GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
