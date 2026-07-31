---
title: Aroj, sakoj kaj miksaĵoj
translations_gpt:
---

{% include menu.html %}

Krom tabeloj kaj hakoj, Raku ofertas kelkajn specialajn ujojn por kolektoj de valoroj. La plej simpla estas la `Set` — neordigita kolekto de _distingaj_ valoroj, kie ĉiu valoro estas aŭ membro aŭ ne, kaj duplikatoj estas ignorataj.

Vi kreas aron per la rutino `set`. Ripetitaj valoroj kunfandiĝas en unu:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Kvankam kvin nombroj estis transdonitaj, la aro havas nur tri elementojn, ĉar `1` kaj `2` aperis pli ol unufoje.

La ĉefa demando, kiun vi faras al aro, estas ĉu valoro apartenas al ĝi. La operatoro `∈` (legata kiel «estas elemento de») redonas Boolean valoron:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Se vi preferas resti ĉe simpla ASCII, la sama operatoro povas esti skribita kiel `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

La sekvaj temoj montras, kiel kombini arojn, kaj enkondukas sakojn kaj miksaĵojn, kiuj estas proksimaj parencoj de la aro.

{% include nav.html %}
