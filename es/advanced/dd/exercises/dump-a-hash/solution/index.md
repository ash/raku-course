---
title: 'Solution: Volcar un hash'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Puedes encontrar el código fuente en el archivo [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Salida

```
{:alpha(1), :beta(2)}
```

## Comentarios

1. `dd` imprime el hash en una forma similar a código, con cada par como `:clave(valor)`.

1. Las claves aparecen en orden alfabético — `alpha` antes de `beta` — aunque `beta` se escribió primero.

{% include nav.html %}
