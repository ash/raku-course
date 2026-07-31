---
title: Aplanamiento e itemización
translations_gpt:
---

{% include menu.html %}

Cuando colocas un array dentro de otro, Raku _no_ fusiona automáticamente sus elementos. Examina el siguiente programa:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

El array `@c` tiene solo dos elementos: los arrays `@a` y `@b`. Raku mantiene cada contenedor como un único elemento en lugar de derramar su contenido en el array externo. Lo mismo sucede con un valor colocado entre otros:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Cuando realmente quieres una secuencia plana única, solicítalo explícitamente con la rutina `flat`:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemización

A veces quieres lo contrario: proteger un contenedor de ser aplanado, incluso dentro de `flat`. La construcción `$(...)` _itemiza_ su argumento, lo marca como un único elemento. Compara el ejemplo anterior con este:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Aquí, `$(@a)` mantiene `@a` como un solo elemento, mientras que `@b` sigue siendo aplanado en sus dos valores. Esta es la idea del sigilo `$` una vez más: un `$` significa "trata esto como una sola cosa".

{% include nav.html %}
