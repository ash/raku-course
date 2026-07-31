---
title: 'Solución: Los primeros múltiplos de siete'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Puedes encontrar el código fuente en el archivo [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Salida

```
(7 14 21 28 35)
```

## Comentarios

1. `1..*` es un rango infinito; `.map(* * 7)` multiplica cada elemento por siete de forma perezosa.

1. `.head(5)` extrae solo los cinco primeros, así que la fuente infinita nunca se calcula por completo.

{% include nav.html %}
