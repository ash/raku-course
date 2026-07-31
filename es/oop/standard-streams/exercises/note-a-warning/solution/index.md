---
title: 'Solución: Un aviso con `note`'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Puedes encontrar el código fuente en el archivo [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Salida

```
Warning: the value is negative
3
```

## Comentarios

1. `note` manda el aviso al error estándar, y solo cuando el valor es realmente negativo. `say` manda el resultado real — el valor absoluto `3` — a la salida estándar.

1. Mantener el diagnóstico en el error estándar significa que no ensucia la salida real del programa: descartar el error estándar con `2>/dev/null` deja solo el `3`.

{% include nav.html %}
