---
title: De mutsu-interpreter
translations_gpt:
---

{% include menu.html %}

**mutsu** is een derde implementatie van Raku, in **Rust** geschreven door Tokuhiro Matsuno. Net als Rakudo compileert hij je programma naar bytecode en voert hij het uit op een virtuele machine — maar dat is niet MoarVM: het is een eigen virtuele machine, ingebouwd in het uitvoerbare bestand `mutsu`.

mutsu implementeert Raku 6.d en wordt actief ontwikkeld. De auteur zegt ronduit dat mutsu nog niet geschikt is voor productiegebruik, maar hij slaagt nu al voor bijna alle testbestanden van Roast, zodat bijna alle programma's in deze cursus er ongewijzigd op draaien.

Eén tekortkoming doet ertoe zolang je aan het leren bent: sommige controles tijdens het compileren ontbreken nog. Het meest in het oog springt dat mutsu in versie 0.24.0 een variabele die je vergeten bent te declareren niet al vóór het starten van het programma meldt, zoals Rakudo en Raku++ dat wel doen. Laat de cursus zo'n foutmelding zien, probeer dat voorbeeld dan met een van de twee andere compilers.

## Raku in de browser

mutsu kan ook naar WebAssembly worden gecompileerd, zodat hij binnen een webpagina draait. Zijn website, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), gebruikt dit voor een inleiding tot Raku in het Engels en het Japans, een praktische tutorial en een speeltuin waar je Raku kunt uitvoeren zonder iets te installeren — op al die pagina's draait mutsu zelf.

## Modules

mutsu heeft een eigen kopie van de pakketbeheerder zef, `mzef` genaamd, zodat je er Raku-modules op de gebruikelijke manier voor kunt installeren: met `mzef install`, gevolgd door de naam van de module.

## Broncode

mutsu is open source. Je vindt hem, samen met kant-en-klare builds van de uitgaven en bouwinstructies, op [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
