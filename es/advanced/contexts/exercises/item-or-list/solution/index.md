---
title: 'Solution: Ítem o lista'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my @a = 1, 2, 3;
my $count = 0;

my $x = $(@a);
$count++ for @($x);
say $count;
```

🦋 Encuentra el código fuente en el archivo [item-or-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/item-or-list.raku).

## Salida

```
3
```

## Comentarios

1. `my $x = $(@a)` fuerza el contexto de elemento, de modo que el array completo se empaqueta en el escalar `$x` en lugar de desplegarse.

1. `@($x)` luego fuerza el contexto de lista, desplegando `$x` de vuelta en sus tres elementos. El bucle `for` por tanto se ejecuta tres veces, dejando el contador en `3`. Los dos contextualizadores son exactamente opuestos: `$( )` empaqueta una lista en un solo elemento, `@( )` la desempaqueta de nuevo.

{% include nav.html %}
