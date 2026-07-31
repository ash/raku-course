---
title: El método `.Str`
---

{% include menu.html %}

El método `.Str` devuelve la forma de **cadena simple** de un valor. Se invoca siempre que un valor se usa en *contexto de cadena*: por `print` y `put`, por el operador de concatenación `~`, y por la interpolación dentro de comillas dobles.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Observa que el arreglo regresó **sin los corchetes**, con sus elementos simplemente unidos por espacios — esa es la diferencia visible con [`.gist`](../gist), que los conserva. Compara los dos lado a lado:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Como la interpolación usa `.Str`, un arreglo colocado dentro de una cadena se muestra de la forma simple:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
