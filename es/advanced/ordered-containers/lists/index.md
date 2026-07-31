---
title: Listas
translations_gpt:
---

{% include menu.html %}

Una lista también es una colección ordenada de valores, pero, a diferencia de un array, es _inmutable_: no puedes cambiar, agregar ni eliminar sus elementos. Una lista se escribe como una secuencia de valores separados por comas, a menudo colocada dentro de paréntesis:

```raku
my $colours = ('red', 'green', 'blue');
```

Puedes leer los elementos de una lista por su índice, y preguntar cuántos hay, igual que con un array:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

La diferencia se muestra cuando intentas cambiar un elemento. Con un array funciona, porque cada elemento es un contenedor:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Con una lista es un error, ya que los elementos de una lista son valores simples, no contenedores:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

El segundo programa se detiene con un mensaje:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Entonces, usa un array (el sigilo `@`) cuando necesites cambiar el contenido, y una lista cuando solo necesites mantener una secuencia fija de valores.

{% include nav.html %}
