---
title: Listas
---

{% include menu.html %}

Las listas son similares a los arrays pero son inmutables. No es posible cambiar el tamaño o los elementos de una lista. Usa paréntesis para crear una lista:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Subíndice de listas

Para acceder a elementos individuales de una lista, usa corchetes con el índice:

```raku
say $odd[3]; # 7
```

Sin embargo, no es posible establecer un nuevo valor:

```raku
$odd[3] = 8; # No está bien
```

Tal intento causa una excepción:

    Cannot modify an immutable List ((1 3 5 7 9))
      in block <unit> at t.raku line 4

## Asignando una lista a un array

¿Qué pasa cuando guardas una lista en una variable con el sigilo `@`?

```raku
my @data = (40, 42, 44);
```

En este caso, la variable `@data` contiene un array, y puedes modificar sus elementos.

%%tipblock
## Variable vs lista

Ten en cuenta que el hecho de que las listas sean inmutables no significa que no puedas reutilizar la variable que las contiene.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}