---
title: 'Solución: Cada palabra en mayúscula inicial'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Puedes encontrar el código fuente en el archivo [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Salida

```
The Lord Of The Rings
```

## Comentarios

1. `.tc` («title-case») pone en mayúscula la primera letra de una cadena. El
hiperoperador `>>.tc` lo aplica a todas las palabras a la vez, y `.join(' ')` vuelve a
montar la frase.

{% include nav.html %}
