---
title: Leer la constante
translations_gpt:
---

{% include menu.html %}

## Problema

Se te proporciona un módulo en un archivo `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Escribe un programa que cargue este módulo con `need` (no `use`) e imprima el valor de `$pi`. Recuerda que `need` no importa nombres, así que accedes a la variable a través del nombre del módulo.

## Ejemplo

```console
$ raku -I. read-pi.raku
3.14
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
