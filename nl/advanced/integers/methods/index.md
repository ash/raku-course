---
title: Methoden voor gehele getallen
---

{% include menu.html %}

Gehele getallen hebben een aantal nuttige methoden en routines. Hier zijn er een paar die je vaak zult gebruiken.

De `is-prime` methode vertelt of een getal een priemgetal is:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

De `gcd` en `lcm` operatoren geven de grootste gemene deler en het kleinste gemene veelvoud van twee getallen:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

De `abs` methode geeft de absolute waarde, en `sign` geeft `-1`, `0` of `1` terug, afhankelijk van of het getal negatief, nul of positief is:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
