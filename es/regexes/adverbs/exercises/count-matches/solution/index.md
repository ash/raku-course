---
title: 'Solución: Cuente las coincidencias'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Puedes encontrar el código fuente en el archivo [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Salida

```
5
```

## Comentarios

1. La clase de caracteres `<[aeiou]>` empareja una vocal, y el adverbio `:g` devuelve todas esas coincidencias en lugar de solo la primera.

1. El resultado se comporta como una lista, así que `.elems` cuenta las coincidencias: las cinco vocales de `education` (e, u, a, i, o).

{% include nav.html %}
