---
title: Methodi integrorum
---

{% include menu.html %}

Numeri integri plures methodos et functiones utiles habent. Hic sunt aliquae quas saepe adhibebis.

Methodus `is-prime` indicat an numerus primus sit:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

Operatores `gcd` et `lcm` maximum communem divisorem et minimum commune multiplum duorum numerorum reddunt:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

Methodus `abs` valorem absolutum reddit, et `sign` reddit `-1`, `0`, vel `1` secundum utrum numerus negativus, nullus, vel positivus sit:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
