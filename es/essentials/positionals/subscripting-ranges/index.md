---
title: Subscripting ranges
---

{% include menu.html %}

Un `Range` es un tipo de dato posicional. Al igual que con los arreglos, puedes acceder a sus elementos individuales.

Por ejemplo, así es como imprimes el tercer elemento en la secuencia de elementos que el rango genera:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Es importante darse cuenta de que los rangos, a diferencia de los arreglos, no necesariamente mantienen todos los valores en memoria.

## Tamaño

Para obtener el tamaño del rango, utiliza el método `elems` como lo haces con los arreglos.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}