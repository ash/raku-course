---
title: 'Solution: Una sección Pod'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Puedes encontrar el código fuente en el archivo [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Salida

```
2
```

## Comentarios

1. `$=pod` contiene el Pod del archivo como una lista de bloques; `$=pod[0]` es el único bloque `=begin pod`.

1. Su `.contents` son los bloques anidados dentro de él — el encabezado `=head1` y el párrafo — así que `.contents.elems` es `2`. Recorrer la estructura de esta manera es como un programa lee su propia documentación como datos.

{% include nav.html %}
