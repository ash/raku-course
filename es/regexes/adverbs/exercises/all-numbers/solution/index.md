---
title: 'Solución: Todos los números'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Puedes encontrar el código fuente en el archivo [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Salida

```
5+10+15
```

## Comentarios

1. `\d+` empareja una serie entera de dígitos, y `:g` recoge todas esas series: aquí `5`, `10` y `15`.

1. Cada coincidencia es un objeto de coincidencia, así que `.map(*.Str)` las convierte en cadenas simples antes de unirlas con `+`.

{% include nav.html %}
