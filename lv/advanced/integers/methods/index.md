---
title: Veselo skaitļu metodes
translations_gpt:
---

{% include menu.html %}

Veseliem skaitļiem ir vairākas noderīgas metodes un rutīnas. Šeit ir dažas, kuras jūs bieži izmantosiet.

Metode `is-prime` nosaka, vai skaitlis ir pirmskaitlis:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

Operatori `gcd` un `lcm` atgriež divu skaitļu lielāko kopīgo dalītāju un mazāko kopīgo dalāmo:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

Metode `abs` atgriež absolūto vērtību, bet `sign` atgriež `-1`, `0` vai `1` atkarībā no tā, vai skaitlis ir negatīvs, nulle vai pozitīvs:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
