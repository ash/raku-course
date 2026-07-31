---
title: 'Solution: ¿Qué es?'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Encuentra el código fuente en el archivo [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Salida

```
True
False
```

## Comentarios

1. `$a.WHAT` no es la cadena `Int` sino el objeto de tipo `Int` real, así que `=== Int` lo compara contra el tipo en sí y devuelve `True`.

1. `$b` contiene una cadena, por lo que su `WHAT` es `Str`; al compararlo con `Int` da `False`. Esto es lo que hace que `WHAT` sea útil en condiciones, no solo en impresiones.

{% include nav.html %}
