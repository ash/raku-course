---
title: Metodi degli interi
---

{% include menu.html %}

Gli interi dispongono di numerosi metodi e routine utili. Eccone alcuni che userai spesso.

Il metodo `is-prime` indica se un numero è primo:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

Gli operatori `gcd` e `lcm` restituiscono il massimo comun divisore e il minimo comune multiplo di due numeri:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

Il metodo `abs` restituisce il valore assoluto, e `sign` restituisce `-1`, `0` o `1` a seconda che il numero sia negativo, zero o positivo:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
