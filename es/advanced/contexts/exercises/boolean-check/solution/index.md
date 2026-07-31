---
title: 'Solution: Una verificación booleana'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my @empty;
say ?@empty;
```

🦋 Encuentra el código fuente en el archivo [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Salida

```
False
```

## Comentarios

1. El prefijo `?` fuerza el contexto booleano.

1. Un array vacío es falso, que es exactamente en lo que `if @array` se basa.

{% include nav.html %}
