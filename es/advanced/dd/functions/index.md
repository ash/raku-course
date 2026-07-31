---
title: Volcado de firmas de funciones
---

{% include menu.html %}

Un `dd` sin argumentos — llamado dentro de una subrutina — imprime la firma de esa subrutina: su nombre y la lista de parámetros, si los tiene. Examina el siguiente ejemplo con dos subrutinas:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

El programa imprime las firmas en lugar de valores:

```console
sub f1()
sub f2($x)
```

Esto es especialmente útil con multi-funciones, donde te indica qué candidato fue realmente llamado:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

La salida nombra la variante correspondiente en cada caso:

```console
sub g()
sub g($x)
```

{% include nav.html %}
