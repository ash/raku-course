---
title: 'Solución: Cuando nada va mal'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Puedes encontrar el código fuente en el archivo [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Salida

```
True
42
```

## Comentarios

1. Cuando el bloque `try` se ejecuta sin excepciones, simplemente vale el valor del bloque.

1. Así que `$r` contiene `42` y `$r.defined` es `True`.

{% include nav.html %}
