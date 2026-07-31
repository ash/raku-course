---
title: 'Solución: Extraiga el número'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Puedes encontrar el código fuente en el archivo [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Salida

```
5
```

## Comentarios

1. El patrón empareja los dígitos y el literal `kg`, pero el bloque en línea guarda solo `$<number>.Int`: el entero, sin la unidad.

1. `made` lee de vuelta ese valor: un `5` de verdad, listo para calcular con él, en lugar del texto `5kg`. Ese es el trabajo típico de `make`: convertir una coincidencia en el valor limpio que realmente quieres.

{% include nav.html %}
