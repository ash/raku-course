---
title: Buscar un símbolo
---

{% include menu.html %}

## Problema

Además de listar los nombres de un paquete, puedes acceder a un nombre dinamicamente usandolo como clave en el stash del paquete. Se te da un módulo `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Escribe un programa separado que cargue el módulo e imprima el valor de `$pi` buscandolo en el stash con `Circle::{'$pi'}` — no con el calificado `$Circle::pi`.

## Ejemplo

Ejecuta el programa con el módulo en la ruta de búsqueda:

```console
$ raku -I. lookup.raku
3.14
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
