---
title: Ganzzahl-Methoden
---

{% include menu.html %}

Ganze Zahlen verfugen uber eine Reihe nutzlicher Methoden und Routinen. Hier sind einige, die du haufig verwenden wirst.

Die Methode `is-prime` gibt an, ob eine Zahl eine Primzahl ist:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

Die Operatoren `gcd` und `lcm` liefern den größten gemeinsamen Teiler und das kleinste gemeinsame Vielfache zweier Zahlen:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

Die Methode `abs` gibt den Absolutwert zuruck, und `sign` liefert `-1`, `0` oder `1`, je nachdem, ob die Zahl negativ, null oder positiv ist:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
