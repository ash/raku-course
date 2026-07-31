---
title: 'Solución: Una asignación con espacios'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Puedes encontrar el código fuente en el archivo [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Salida

```
True
```

## Comentarios

1. Como `TOP` es una `rule`, los espacios del patrón permiten espacio en blanco alrededor del `=` en la entrada.

1. Así que `'x = 5'` se analiza. Con un `token` para `TOP` solo emparejaría `'x=5'`.

El espacio en blanco que una `rule` admite es **opcional**, no obligatorio: el espacio significativo empareja *cero* espacios con la misma naturalidad que uno, así que la forma sin espacios también se analiza:

```raku
say Assign.parse('x=5').defined; # True
```

La `rule` acepta por tanto igualmente `'x = 5'`, `'x=5'` e incluso `'x =5'`: flexibilidad sin tener que detallar dónde puede o no haber un espacio.

{% include nav.html %}
