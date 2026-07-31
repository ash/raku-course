---
title: La flua operatoro
translations_gpt:
---

{% include menu.html %}

La flua operatoro `==>` sendas liston de maldekstre en la operacion dekstre. La rezulto poste fluas plu al tie, kien montras la sekva `==>`, finiĝante en variablo, kiu kolektas ĝin:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Legu ĝin de maldekstre dekstren: prenu `1..10`, konservu la parajn nombrojn kaj konservu la rezulton en `@evens`. La operatoro `%%` signifas «estas dividebla per», do `* %% 2` konservas la parajn nombrojn.

La grava regulo estas, ke fluo devas **finiĝi en celo** — kutime `my @array` (aŭ jam ekzistanta variablo). La datumoj fluas antaŭen en ĝin. Skribi la atribuon inverse, per `=`, ne faras tion, kion vi volas, ĉar la fluo kaj la atribuo konkurencas; ĉiam lasu la fluon finiĝi en sian variablon.

Fluo estas nur alia maniero skribi ĉenon da listaj operacioj. La saman rezulton oni povus skribi kiel `my @evens = (1..10).grep(* %% 2)`. La flua formo montras sian valoron, kiam estas pluraj etapoj, kiel montras la sekva temo.

{% include nav.html %}
