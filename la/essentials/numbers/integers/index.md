---
title: Numeri integri in Raku
---

{% include menu.html %}

Typus datorum `Int` numeros integros repraesentat. Numeri possunt esse positi et negativi, et potes uti signo explicito `+` si vis. Hic sunt pauca exempla manifesta:

```raku
42
-42
100
-5
0
```

Ita, nudus `0` per defaltam integer consideratur.

## Greges digitorum

Raku habet venustum munus quod permittit te numeros magnos scribere cum aliquibus adiutoribus visualibus qui digitos in greges milium dividunt:

```raku
1_000_000
-3_141_592
```

Etsi potes construere numerum sicut `34_56`, melius est hoc vitare ut alios legentes codicem tuum non confundas. Sed non potes habere duos underscores adiacentis, nec potes numerum cum eo incipere nec finire.

## Numeri integri arbitrarii longitudinis

Raku perfecte tractat numeros ultra limites 32- vel 64-bitarum. Exempli gratia, sequens programma est programma acceptabile quod multiplicat duos magnos numeros integros et rectum eventum imprimit.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}