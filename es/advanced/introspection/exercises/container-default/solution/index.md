---
title: 'Solution: El valor predeterminado del contenedor'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Encuentra el código fuente en el archivo [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Salida

```
0
0
```

## Comentarios

1. El trait `is default(0)` le da al contenedor un valor por defecto. Como no se ha asignado nada, al leer `$count` se devuelve ese valor por defecto, así que la primera línea imprime `0`.

1. `.VAR.default` le pregunta al contenedor en sí por su valor por defecto declarado, que también es `0`. Sin el trait, un contenedor sin tipo habría tenido como valor por defecto `(Any)`.

{% include nav.html %}
