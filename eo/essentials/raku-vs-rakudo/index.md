---
title: Raku, Rakudo, Raku++ kaj mutsu
translations_gpt:
---

{% include menu.html %}

**Raku** estas la nomo de la programlingvo, dum **kompililo** estas la programo, kiu legas vian kodon kaj rulas ĝin. Raku ne estas ligita al unu sola kompililo: ĉi tiu kurso uzas **Rakudo**, la establitan, kaj ekzistas ankaŭ pli novaj — **Raku++** kaj **mutsu**.

## Pli ol unu kompililo

La dezajno de Raku ne preskribas, kiun kompililon uzi. Al la dezajnaj dokumentoj apartenas aro da testoj nomata Roast; iu ajn povas verki kompililon, kaj se ĝi trapasas tiujn testojn, ĝi estas kompililo de Raku.

Longan tempon Rakudo estis la sola matura realigo, sed tio ne plu validas. En julio 2026 aperis dua kompililo — **Raku++** (ĝia rulebla dosiero nomiĝas `rakupp`), verkita en C++. Ĝia versio 5.4.1 trapasas la tutan testaron Roast, kaj ĝi ekfunkcias rimarkinde rapide. Ĉi tiu kurso uzas Rakudo por siaj ekzemploj, tamen tio, kion vi lernas, estas la lingvo Raku mem, kaj preskaŭ ĉio el ĝi rulas senŝanĝe ankaŭ sur Raku++.

Ekzistas ankaŭ tria realigo: **mutsu**, interpretilo verkita en Rust de Tokuhiro Matsuno. Ĝi kompilas Raku al bajtkodo por sia propra virtuala maŝino, kaj ĝi rulas ankaŭ ene de retumilo per WebAssembly — ĝia retejo havas lernilon pri Raku kaj provejon konstruitajn sur ĝi. mutsu estas aktive disvolvata kaj, laŭ la vortoj de sia aŭtoro, ankoraŭ ne taŭgas por produktada uzo, tamen ĝi jam trapasas preskaŭ ĉiujn testodosierojn de Roast.

La sekvaj paĝoj rigardas laŭvice ĉiun el la tri — Rakudo, Raku++ kaj mutsu — kaj kiel instali ilin.

## Eksteraj ligiloj

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ ĉe GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
