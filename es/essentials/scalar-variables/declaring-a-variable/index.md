---
title: Variables escalares
---

{% include menu.html %}

Las variables deben ser anunciadas antes de usarlas. Raku tiene _declaradores_ especiales para esto. Para declarar una variable, usa `my` como se muestra a continuación:

```raku
my $name;
```

Dicho esto, has introducido una nueva variable, que aún no tiene ningún contenido. Pero ya es conocida por el compilador para identificarla cuando vea el mismo nombre más adelante en el programa.

## Más de una variable

Puedes declarar dos o más variables usando el mismo declarador `my`:

```raku
my ($x, $y);
```

{% include nav.html %}