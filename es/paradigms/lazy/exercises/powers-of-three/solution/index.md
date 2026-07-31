---
title: 'Solución: Potencias de tres'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Puedes encontrar el código fuente en el archivo [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Salida

```
(1 3 9 27 81)
```

## Comentarios

1. La clausura `* * 3` es la regla del término siguiente: toma el actual y multiplícalo por tres. Dar la regla explícitamente es más fiable que dejar que el operador la adivine a partir de los primeros términos.

1. El punto final `*` hace la serie infinita, y `.head(5)` toma los cinco primeros.

{% include nav.html %}
