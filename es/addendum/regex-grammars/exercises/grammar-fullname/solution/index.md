---
title: 'Solución: Una gramática para nombres completos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Puedes encontrar el código fuente en el archivo [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Salida

```
Grace
Hopper
```

## Comentarios

1. El token `TOP` es donde empieza el análisis; se refiere a los otros tokens por
nombre con `<first>` y `<last>`, que pasan a ser claves de la coincidencia.

1. `$match<first>` es un objeto de coincidencia; el `~` prefijo lo convierte en la
cadena de texto simple que coincidió.

{% include nav.html %}
