---
title: 'Solución: Normalice los espacios'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Puedes encontrar el código fuente en el archivo [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Salida

```
too many spaces
```

## Comentarios

1. `.trim` elimina los espacios iniciales y finales; la sustitución reemplaza después
toda serie de espacio en blanco `\s+` por un solo espacio.

1. El adverbio `:g` hace global la sustitución, así que se contraen *todos* los huecos,
no solo el primero.

{% include nav.html %}
