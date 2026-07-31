---
title: 'Solución: Un signo opcional'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Puedes encontrar el código fuente en el archivo [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Salida

```
｢-42｣
```

## Comentarios

1. La parte `'-'?` empareja un signo menos opcional: cero o uno.

1. `\d+` empareja después la serie de dígitos. El mismo patrón empareja también un número sin signo, como `42`.

{% include nav.html %}
