---
title: Kreado kaj voko de funkcioj en Raku
---

{% include menu.html %}

Vi atingis la lastan sekcion de la unua parto de la kurso. Kompletigante ĝin, vi havos ĉiujn sciojn necesajn por krei preskaŭ _ĉiun_ programon en Raku. La temo de ĉi tiu sekcio estas _funkcioj_, aŭ _subrutinaj_, aŭ eĉ simple _rutinaj_.

Funkcio estas reuzebla parto de kodo kun sia propra nomo. Vi povas _voki_ funkciojn el diversaj lokoj en la programo.

## Kreado de funkcio

Por krei funkcion, uzu la ŝlosilvorton `sub` sekvatan de la nomo de la funkcio. La korpo de la funkcio estas enfermita en paro de kurbaj krampoj.

```raku
sub saluton {
    diru 'Saluton, Mondo!';
}
```

## Uzado de funkcio

Por uzi la funkcion, simple metu ĝian nomon ĉe la loko kie vi bezonas voki ĝin. En Raku, difino de funkcio povas esti lokita antaŭ aŭ post la loko kie la funkcio estas uzata.

```raku
diru 'Jen kion la unua programo kutime presas:';
saluton;    

sub saluton {
    diru 'Saluton, Mondo!';
}
```

La programo presas ambaŭ mesaĝojn:

```console
$ raku t.raku
Jen kion la unua programo kutime presas:
Saluton, Mondo!
```

Nun, ni rigardu aliajn detalojn pri kreado kaj uzado de funkcioj.

{% include nav.html %}