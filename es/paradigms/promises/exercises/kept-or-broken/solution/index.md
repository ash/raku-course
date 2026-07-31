---
title: 'Solución: Cumplida o rota'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Puedes encontrar el código fuente en el archivo [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Salida

```
Kept
```

## Comentarios

1. Después de que el bloque termine con éxito, la promesa queda _cumplida_.

1. `.status` lo informa como `Kept`. Si el bloque hubiera lanzado una excepción, el estado sería `Broken`.

{% include nav.html %}
