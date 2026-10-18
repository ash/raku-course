---
title: La interpretilo mutsu
translations_gpt:
---

{% include menu.html %}

**mutsu** estas tria realigo de Raku, verkita en **Rust** de Tokuhiro Matsuno. Same kiel Rakudo, ĝi kompilas vian programon al bajtkodo kaj rulas ĝin sur virtuala maŝino — sed la virtuala maŝino estas ĝia propra, enkonstruita en la ruleblan dosieron `mutsu`, anstataŭ MoarVM.

mutsu realigas Raku 6.d kaj estas aktive disvolvata. Ĝia aŭtoro diras rekte, ke ĝi ankoraŭ ne taŭgas por produktada uzo, tamen ĝi jam trapasas preskaŭ ĉiujn testodosierojn de Roast, do preskaŭ ĉiuj programoj de ĉi tiu kurso rulas sur ĝi senŝanĝe.

Unu breĉo gravas dum vi lernas: kelkaj kompiltempaj kontroloj ankoraŭ mankas. Plej videble, ĉe versio 0.24.0 mutsu ne raportas variablon, kiun vi forgesis deklari, antaŭ ol la programo ruliĝas, kiel faras Rakudo kaj Raku++. Kiam la kurso montras tian erarmesaĝon, provu tiun ekzemplon per unu el la aliaj du kompililoj.

## Raku en la retumilo

mutsu povas ankaŭ esti kompilita al WebAssembly, do ĝi rulas ene de retpaĝo. Ĝia retejo, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), uzas tion por enkonduko al Raku en la angla kaj la japana, por praktika lernilo, kaj por provejo, kie vi povas ruli Raku sen instali ion ajn — ĉio en tiuj paĝoj rulas per mutsu mem.

## Moduloj

mutsu venas kun sia propra kopio de la pakaĵadministrilo zef, nomata `mzef`, do oni povas instali Raku-modulojn por ĝi laŭ la kutima maniero, per `mzef install` sekvata de la nomo de la modulo.

## Fontkodo

mutsu estas malfermitkoda. Vi povas trovi ĝin, kune kun eldonaj binaraĵoj kaj konstruinstrukcioj, ĉe [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
