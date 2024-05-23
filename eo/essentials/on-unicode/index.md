---
title: Notes pri uzado de Unikodo
---

{% include menu.html %}

Raku supozas, ke ĉiuj viaj programdosieroj estas konservitaj kiel UTF-8 dosieroj. El praktika vidpunkto, tio signifas, ke vi ne devas zorgi pri ne-ASCII-karakteroj en, ekzemple, ŝnurliteraloj. Sed tio ne estas ĉio. Vi plej verŝajne ne devos zorgi, se via programo legas tekstdosieron, kiu ankaŭ estas UTF-8 dosiero. Tio ankaŭ signifas, ke la longeco de ŝnuro estas ĝuste detektita kiel la nombro de karakteroj kaj ne la nombro de bajtoj. (Ni pli detale rigardos tion poste.)

La sekva afero, kiun vi volas scii, estas ke vi povas uzi ne-latinajn aŭ ne-anglajn literojn por identigiloj. Vi povas nomi vian variablon `$ι` anstataŭ `$i` se vi preferas, kaj la kompililo ĝin ĝuste analizos.

Raku traktas la Unikodajn ecojn de la karakteroj sufiĉe pedante. Ekzemple, ĝi ne nur scias, ĉu karaktero estas litero aŭ cifero, sed ankaŭ ĝuste identigas parigitajn karakterojn kiel krampojn aŭ malsamajn specojn de krampoj. En multaj kazoj, vi povas elekti malsaman tipon de krampoj por apartaj partoj de la programo. Ekzemple, vi povas modifi nian ‘Saluton, Mondo!’ programon por uzi ĉi tiujn ne-latinajn citilojn (vi vidos ilin denove kiam ni laboros kun Raku-gramatikoj):

```raku
say ｢Saluton, Mondo!｣;
```

Iuj enkonstruitaj operatoroj havas du formojn: Unikodan kaj ASCII-versiojn. Ekzemple, oni povas tajpi negitan komparon kiel `!=` aŭ kiel `≠`. La sama aplikiĝas al aroj operacioj: ekzemple, `∈` havas puran ASCII-ekvivalenton `(elem)`. Aŭ, estas enkonstruita konstanto, kiun vi povas referenci kiel `pi` aŭ `π`.

Kiam vi laboras kun nombroj, vi povas elekti uzi frakciojn en la formo de `½` anstataŭ `0.5`. Aŭ, taksi la kvadraton de `$x` kiel `$x²` uzante superskriban karakteron.

Trovu la plenan liston de tiaj paroj ĉe la sekva dokumenta paĝo: 📖 [Unikodo kontraŭ ASCII simboloj](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}