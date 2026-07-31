---
title: 'Solución: Una las cadenas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say [~] '2', '0', '2', '5';
```

🦋 Puedes encontrar el código fuente en el archivo [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Salida

```
2025
```

## Comentarios

1. `[~]` inserta el operador de concatenación `~` entre las cadenas.

1. `'2' ~ '0' ~ '2' ~ '5'` produce la única cadena `2025`.

{% include nav.html %}
