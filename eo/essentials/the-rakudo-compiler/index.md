---
title: La tradukilo Rakudo
translations_gpt:
---

{% include menu.html %}

**Rakudo** estas la referenca realigo de Raku kaj la kompililo, kiun uzas ĉi tiu kurso. Ĝi estas la plej kompleta kaj plej bone provita maniero ruli Raku hodiaŭ, do kiam oni diras «la kompililo de Raku», oni kutime celas Rakudo.

Rakudo mem estas skribita plejparte en Raku, kune kun malpli granda ekŝarga lingvo nomata NQP («Not Quite Perl»). Ĝi kompilas vian programon al bajtkodo kaj rulas ĝin sur virtuala maŝino nomata **MoarVM**, kiun vi ricevas aŭtomate kiam vi instalas Rakudo. Ĉar Rakudo celas kovri la tutan lingvon, ĝi estas la plej sekura elekto kiam vi bezonas, ke ĉiu angulo de Raku funkciu.

Rakudo realigas Raku 6.d kaj estas eldonata ofte, do korektoj kaj novaj funkcioj atingas vin rapide.

## La virtuala maŝino

Defaŭlte Rakudo rulas sur MoarVM, virtuala maŝino konstruita speciale por Raku. La dezajno ne ligas Rakudo al unu maŝino — ĝi ankaŭ povas esti konstruita super aliaj virtualaj maŝinoj — sed MoarVM estas la norma, bone subtenata celo, kaj ĉi tiu kurso supozas ĝin. Jen la ĉefa diferenco disde [Raku++](/eo/essentials/the-rakupp-compiler), kiu estas skribita en C++ kaj bezonas neniun propran virtualan maŝinon.

## Fontkodo kaj ligiloj

Rakudo estas malfermitkoda kaj disvolvata publike:

* [rakudo.org](https://rakudo.org)
* [Rakudo en GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
