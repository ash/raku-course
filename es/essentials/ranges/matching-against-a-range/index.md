---
title: Coincidencia contra un rango
---

{% include menu.html %}

Toma un rango y una variable con un valor entero en ella:

```raku
my $r = 1..10;
my $v = 7;
```

Usando el _operador de coincidencia inteligente_ `~~`, puedes verificar si el valor está dentro del rango:

```
say $v ~~ $r;
```

En el ejemplo mostrado, la condición es `True`, por lo que el programa imprime `True`.

{% include nav.html %}