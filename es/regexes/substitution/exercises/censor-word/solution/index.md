---
title: 'Solución: Censure una palabra'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Puedes encontrar el código fuente en el archivo [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Salida

```
*** *** plan
```

## Comentarios

1. El operador `s///` reemplaza el `secret` coincidente por el texto literal `***`, escrito sin comillas, y cambia `$s` en el sitio.

1. Es el adverbio `:g` el que hace que reemplace **ambas** apariciones. Sin él, solo se censuraría el primer `secret`.

{% include nav.html %}
