---
title: 'Solution: Elementos comunes'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Encuentra el programa en el archivo [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Salida

```
2
False
```

## Comentarios

1. La intersección `$a ∩ $b` es a su vez un set — aquí `{banana, cherry}` — por lo que tiene `2` elementos. Si prefieres ASCII, escribe `(&)` en lugar de `∩`.

1. Como la intersección es un set, puedes hacerle la pregunta de pertenencia con `∈`. `apple` solo está en el primer set, así que no está en la intersección, y la prueba devuelve `False`.

{% include nav.html %}
