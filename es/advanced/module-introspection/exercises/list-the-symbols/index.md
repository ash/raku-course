---
title: Listar los símbolos
---

{% include menu.html %}

## Problema

Se te da un módulo en un archivo `Circle.rakumod` que define dos variables `our`:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Escribe un programa que use el módulo e imprima, primero, cuántos nombres están definidos en el paquete del módulo, y luego los nombres en orden alfabético.

## Ejemplo

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
