---
title: 'Solución: Combine dos listas en un hash'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Puedes encontrar el código fuente en el archivo [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Salida

```
Anna: 90
Bob: 85
Cara: 95
```

## Comentarios

1. `Z=>` es el metaoperador de cremallera aplicado al constructor de pares `=>`: recorre
ambas listas al mismo paso y construye un par `nombre => puntuación` con cada posición.

1. Asignar esa lista de pares a una variable `%` crea un hash, que después se imprime
en orden de clave.

{% include nav.html %}
