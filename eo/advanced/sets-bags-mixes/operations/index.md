---
title: Araj operacioj
translations_gpt:
---

{% include menu.html %}

Aroj povas esti kombinataj per la kutimaj operacioj el la aroteorio. Ĉiu operatoro havas Unikodan simbolon kaj ASCII-literumon; vi povas uzi tiun, kiun vi preferas.

La _kunigo_ `∪` (aŭ `(|)`) kolektas ĉiujn valorojn, kiuj estas en ĉiu el la du aroj:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

La du aroj kunhavas la valoron `3`, do la kunigo havas kvin distingajn elementojn: `1, 2, 3, 4, 5`.

La _komunaĵo_ `∩` (aŭ `(&)`) konservas nur la valorojn, kiuj estas en ambaŭ aroj:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — notu, ke aroj estas neordigitaj
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Ĉi tie la komunaĵo enhavas `2` kaj `3` — la valorojn ĉeestantajn en ambaŭ aroj. Aro havas neniun propran ordon, do la du elementoj povas aperi en ambaŭ ordoj, kiam ili estas presataj.

La rezulto de ĉi tiuj operacioj estas mem aro, do vi povas fari al ĝi la samajn demandojn: kiom da elementoj ĝi havas, kaj ĉu aparta valoro apartenas al ĝi.

{% include nav.html %}
