---
title: Entjeraj metodoj
translations_gpt:
---

{% include menu.html %}

Entjeroj havas kelkajn utilajn metodojn kaj rutinojn. Jen kelkaj, kiujn vi uzos ofte.

La metodo `is-prime` diras, ĉu nombro estas primo:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

La operatoroj `gcd` kaj `lcm` redonas la plej grandan komunan divisoron kaj la plej malgrandan komunan multiplikon de du nombroj:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

La metodo `abs` redonas la absolutan valoron, kaj `sign` redonas `-1`, `0`, aŭ `1` depende de tio, ĉu la nombro estas negativa, nulo, aŭ pozitiva:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
