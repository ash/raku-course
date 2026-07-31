---
title: Altordaj funkcioj
translations_gpt:
---

{% include menu.html %}

En Raku, subprogramo estas ordinara valoro: vi povas konservi ĝin en variablo, transdoni ĝin al alia subprogramo, kaj redoni ĝin kiel rezulton. Subprogramo, kiu **prenas** aŭ **redonas** alian subprogramon, nomiĝas _altorda funkcio_, kaj ĝi estas la koro de funkcia programado.

Vi jam uzis altordajn funkciojn sen nomi ilin — `map`, `grep` kaj `sort` ĉiuj prenas kodblokon kiel argumenton. Ĉi tiu sekcio montras, kiel skribi viajn proprajn.

Ĉi tiuj blok-prenantaj metodoj ankaŭ estas natura loko por la forma _dupunkta voko_, kiu permesas al vi forlasi la krampojn — `(1..10).grep: * %% 2` anstataŭ `(1..10).grep(* %% 2)`. Ĝi estas enkondukita en [Vokado per dupunkto](/eo/advanced/colon-calls), kaj la mallongigo `*`, kiun ĝi uzas, estas la [Whatever-stelo](/eo/advanced/whatever).

{% include nav.html %}
