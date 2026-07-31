---
title: 'Solución: El segundo valor más grande'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Puedes encontrar el código fuente en el archivo [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Salida

```
7
```

## Comentarios

1. Convertir la lista en un `Set` con `.Set` tira el `9` duplicado, ya que un conjunto
guarda cada valor una sola vez.

1. `.keys` devuelve los valores distintos — siguen siendo `Int`, no cadenas —, así que
un `.sort` a secas los ordena numéricamente. El segundo más grande está entonces un
lugar antes del final, `[*-2]`.

{% include nav.html %}
