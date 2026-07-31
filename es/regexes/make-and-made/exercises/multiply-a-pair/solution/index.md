---
title: 'Solución: Multiplique un par'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Puedes encontrar el código fuente en el archivo [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Salida

```
20
```

## Comentarios

1. Los dos números se capturan como `<a>` y `<b>`, cada uno convertido con `.Int`.

1. El bloque en línea combina las subcoincidencias — multiplicándolas — y guarda el resultado en la coincidencia, que `made` devuelve después.

{% include nav.html %}
