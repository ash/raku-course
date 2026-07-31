---
title: 'Solution: Clave y valor'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Encuentra el código fuente en el archivo [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Salida

```
(x 10)
```

## Comentarios

1. El adverbio `:kv` devuelve tanto la clave como el valor en forma de lista.

1. Para un hash, la clave es el nombre con el que accedes mediante subíndice, por lo que `%h<x>:kv` devuelve la lista `(x 10)`.

{% include nav.html %}
