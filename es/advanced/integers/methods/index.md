---
title: Métodos de enteros
---

{% include menu.html %}

Los enteros vienen con varios métodos y rutinas útiles. Aquí tienes algunos que usarás con frecuencia.

El método `is-prime` indica si un número es primo:

```raku
say 17.is-prime; # True
say 18.is-prime; # False
```

Los operadores `gcd` y `lcm` devuelven el máximo común divisor y el mínimo común múltiplo de dos números:

```raku
say 12 gcd 18; # 6
say 4 lcm 6;   # 12
```

El método `abs` devuelve el valor absoluto, y `sign` devuelve `-1`, `0` o `1` dependiendo de si el número es negativo, cero o positivo:

```raku
say (-5).abs;  # 5
say (-5).sign; # -1
say 0.sign;    # 0
```

{% include nav.html %}
