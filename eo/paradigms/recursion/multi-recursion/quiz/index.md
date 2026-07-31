---
title: Kvizo — Rekursio per multi-subprogramoj
translations_gpt:
---

{% include menu.html %}

Donite `multi fact(0) { 1 }` kaj `multi fact($n) { $n * fact($n - 1) }`, kian rolon ludas la kandidato `multi fact(0)`?

{:.quiz}
1 | Ĝi estas la baza kazo — la kandidato, kiun la disdono elektas, kiam la argumento estas `0`
0 | Ĝi starigas defaŭltan valoron redonatan por ĉiu argumento
0 | Ĝi ruliĝas unue ĉe ĉiu voko, antaŭ la alia kandidato
0 | Ĝi estas postulata sintakso, kiun Raku ignoras je rultempo

{% include quiz.html %}

<div class="extended-explanation">

La literalo `0` en la subskribo igas tiun kandidaton kongrui nur, kiam la argumento estas ekzakte `0`. Ĝi estas la baza kazo esprimita kiel propra subprogramo: dum la argumento estas pli granda, la disdono daŭre elektas `multi fact($n)`, kaj post kiam la rekursio atingas `0`, ĝi ŝanĝiĝas al `multi fact(0)` kaj haltas.

</div>

{% include nav.html %}
