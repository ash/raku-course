---
title: Zip meta-operatores
translations_gpt:
---

{% include menu.html %}

Meta-operator zip `Z` duas (vel plures) listas accipit et elementa earum per positionem coniungit:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

Eventus est lista gregum: primum elementum cuiusque listae simul, deinde secundum cuiusque, et ita porro.

Ingeniosius, `Z` cum operatore combinare potes ut in unoquoque pare agat. Exempli gratia, `Z+` elementa per positionem addit:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Hic est meta-operator zip operatorem `+` involvens: computat `1 + 10`, `2 + 20`, et `3 + 30`. Eodem modo, `Z*` elementa correspondentia multiplicat:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

Et `Z~` fila correspondentia concatenat:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
