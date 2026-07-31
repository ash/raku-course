---
title: 'Solución: Cuente las vocales'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Puedes encontrar el código fuente en el archivo [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Salida

```
6
```

## Comentarios

1. Pasarle una expresión regular a `.comb` devuelve todos los caracteres que coinciden.
La clase de caracteres `<[aeiouAEIOU]>` enumera las vocales en ambas cajas.

1. El `+` prefijo pone la lista resultante en contexto numérico, dando su longitud: el
número de vocales.

{% include nav.html %}
