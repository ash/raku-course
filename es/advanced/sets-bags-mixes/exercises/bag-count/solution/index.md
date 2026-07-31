---
title: 'Solution: Contar en una bolsa'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Encuentra el programa en el archivo [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Salida

```
2
6
```

## Comentarios

1. `'the cat sat on the mat'.words` produce las seis palabras, y `bag` cuenta cada una. Al acceder con `<the>` se obtiene cuántas veces apareció `the` — dos veces.

1. El método `total` suma todos los conteos, lo cual equivale al número de palabras introducidas en el bag — `6`.

{% include nav.html %}
