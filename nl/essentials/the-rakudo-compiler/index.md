---
title: De Rakudo-compiler
translations_gpt:
---

{% include menu.html %}

**Rakudo** is de referentie-implementatie van Raku en de compiler die deze cursus gebruikt. Het is vandaag de meest complete en best beproefde manier om Raku uit te voeren, dus als mensen het over "de Raku-compiler" hebben, bedoelen ze meestal Rakudo.

Rakudo is zelf grotendeels in Raku geschreven, samen met een kleinere opstarttaal die NQP heet ("Not Quite Perl"). Het compileert je programma naar bytecode en voert dat uit op een virtuele machine die **MoarVM** heet, die je automatisch krijgt wanneer je Rakudo installeert. Omdat Rakudo de hele taal wil dekken, is het de veiligste keuze wanneer je elk hoekje van Raku nodig hebt.

Rakudo implementeert Raku 6.d en wordt vaak uitgebracht, zodat verbeteringen en nieuwe mogelijkheden je snel bereiken.

## De virtuele machine

Standaard draait Rakudo op MoarVM, een virtuele machine die speciaal voor Raku gebouwd is. Het ontwerp bindt Rakudo niet aan één machine — het kan ook op andere virtuele machines gebouwd worden — maar MoarVM is het standaard en goed ondersteunde doel, en deze cursus gaat daarvan uit. Dat is het belangrijkste verschil met [Raku++](/nl/essentials/the-rakupp-compiler), dat in C++ geschreven is en geen eigen virtuele machine nodig heeft.

## Broncode en links

Rakudo is open source en wordt in de openbaarheid ontwikkeld:

* [rakudo.org](https://rakudo.org)
* [Rakudo op GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
