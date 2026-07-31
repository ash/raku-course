---
title: Verki agoklason
translations_gpt:
---

{% include menu.html %}

Agoklaso estas ordinara klaso kun unu metodo por ĉiu gramatika ĵetono. Ĉiu metodo ricevas la kongruon por tiu ĵetono kiel `$/`, kaj vokas `make` por alfiksi valoron — ekzakte tion, kion la enlinia bloko faris, sed tenata aparte de la ŝablono:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

La gramatiko nun enhavas nur la ŝablonon; la tuta signifo loĝas en `SumActions`. Rimarku, kiel la metodoj kunlaboras: `a` kaj `b` ĉiu `make` entjeron, kaj `TOP` legas tiujn per `$<a>.made` kaj `$<b>.made` kaj faras ilian sumon.

Por uzi la agoklason, transdonu ekzempleron al `.parse` per la nomita argumento `actions`, poste legu la supran rezulton per `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Dum la gramatiko analizas, la metodo de ĉiu ĵetono ruliĝas aŭtomate kaj konstruas la valoron de malsupre supren. La rezulto sur la supra kongruo estas la valoro, kiun vi volas — ĉi tie, la nombro `5`.

{% include nav.html %}
