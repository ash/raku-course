---
title: Redoni subprogramojn
translations_gpt:
---

{% include menu.html %}

Subprogramo ankaŭ povas **redoni** subprogramon. Tio permesas al vi konstrui novajn funkciojn tuj, agorditajn al la argumentoj, kiujn vi donas:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` konstruas kaj redonas anoniman subprogramon, kiu aldonas `5` al sia argumento. Ni konservas ĝin en `&add5` kaj vokas ĝin kiel ĉiun alian subprogramon. Voki `adder(10)` donus malsaman aldonilon, kiu aldonas dek.

Rimarku, ke la redonita subprogramo memoras la valoron de `$n` el la voko, kiu kreis ĝin — `add5` konservas sian `5` eĉ post kiam `adder` finiĝis. Subprogramo, kiu kaptas valorojn el la amplekso, kie ĝi estis kreita, nomiĝas [_fermaĵo_](/eo/paradigms/closures), la temo de la sekva sekcio.

Redoni funkciojn estas kompakta maniero produkti familiojn de rilataj operacioj sen ripeti sin: unu difino de `adder` donas senliman nombron da specifaj aldoniloj.

{% include nav.html %}
