---
title: Operationes coniunctorum
translations_gpt:
---

{% include menu.html %}

Inopiae coniungi possunt operationibus usitatis ex theoria inopiarum. Quisque operator symbolum Unicode et scripturam ASCII habet; utroque uti potes prout mavis.

_Unio_ `∪` (vel `(|)`) omnes valores colligit qui in alterutra inopia sunt:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

Duae inopiae valorem `3` communem habent, itaque unio quinque elementa distincta habet: `1, 2, 3, 4, 5`.

_Intersectio_ `∩` (vel `(&)`) tantum valores retinet qui in utraque inopia sunt:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — nota inopias non ordinatas esse
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Hic intersectio `2` et `3` continet — valores in utraque inopia praesentes. Inopia ordinem intrinsecum non habet, itaque duo elementa quolibet ordine impressa apparere possunt.

Resultatum harum operationum ipsum inopia est, itaque easdem quaestiones ei ponere potes: quot elementa habeat, et num certus valor ad eam pertineat.

{% include nav.html %}
