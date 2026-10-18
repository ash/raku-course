---
title: La kompililo Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

**Raku++** — ĝia rulebla dosiero nomiĝas `rakupp` — estas dua kompililo de Raku, unue eldonita en julio 2026. Dum Rakudo rulas sur la virtuala maŝino MoarVM, Raku++ estas skribita en **C++** kaj bezonas neniun propran virtualan maŝinon.

Ĝi estas kaj **interpretilo** kaj **kompililo**: ĝi povas ruli programon rekte, aŭ traduki ĝin al maŝina kodo por plia rapideco. Ĉar ne estas peza rultempo por startigi, `rakupp` ekfunkcias en nur kelkaj milisekundoj, kio faras ĝin agrabla por mallongaj skriptoj kaj ĉiutaga laboro en la komandlinio. Ĝia aŭtoro priskribas ĝin kiel la plej rapidan kompililon de Raku.

Raku++ realigas Raku 6.d defaŭlte, kaj 6.e kiam programo petas tion per `use v6.e.PREVIEW`. Versio 5.4.1, eldonita en oktobro 2026, trapasas ĉiujn 1425 testodosierojn de la testaro Roast — la oficiala aro de testoj de Raku.

Raku++ rulas ankaŭ en retumilo: kompilita al WebAssembly, ĝi funkciigas la provejon ĉe [raku.online](https://raku.online), kie vi povas provi Raku sen instali ion ajn.

## Reĝimoj de interpretilo kaj kompililo

Rulu programon tuj, same kiel vi farus per Rakudo:

```console
$ rakupp hello.raku
```

Aŭ petu al Raku++ transformi programon en memstaran maŝinkodan rulebladosieron, kiu rulas eĉ pli rapide:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Por ĉiutaga lernado la simpla interpretila reĝimo estas ĉio, kion vi bezonas; la kompilaj reĝimoj estas tie, kiam vi volas la plian rapidecon.

## Fontkodo

Raku++ estas malfermitkoda. Vi povas trovi ĝin, kune kun eldonaj binaraĵoj kaj konstruinstrukcioj, ĉe [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
