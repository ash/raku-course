---
title: 'Solución: Invierta el orden de las palabras'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Puedes encontrar el código fuente en el archivo [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Salida

```
nice really is Raku
```

## Comentarios

1. `.words` parte la frase en una lista, `.reverse` invierte el orden de la lista y
`.join(' ')` vuelve a pegar las palabras con espacios simples.

{% include nav.html %}
