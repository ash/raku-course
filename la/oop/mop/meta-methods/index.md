---
title: Metamethodi
translations_gpt:
---

{% include menu.html %}

_Metamethodus_ per `.^` loco `.` vocatur. Ordinarium `.method` methodum obiecti exsequitur; `.^method` methodum in **metaobiecto** obiecti vocat — de genere interrogat potius quam ut genus agit.

`.^name` invenisti, quae nomen generis reddit:

```raku
say 42.^name; # Int
```

Aliae metamethodi structuram generis inspiciunt. `.^attributes` attributa eius enumerat, et `.^find_method` tibi indicat utrum methodus exsistat:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` _ordinem resolutionis methodorum_ reddit — catenam generum quam Raku ordine perquirit cum methodum quaerit. Est linea hereditatis classis:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` ab `A` heredat, et omne genus tandem ab `Any` et `Mu`, itaque vocatio methodi in `B` per illam ipsam semitam quaeritur. Hae metamethodi structuram generum tuorum in data vertunt quae tempore exsecutionis interrogare potes.

{% include nav.html %}
