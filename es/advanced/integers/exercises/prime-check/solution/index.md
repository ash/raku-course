---
title: 'Solution: ¿Primo o no?'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Encuentra el programa en el archivo [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Salida

```
True
False
```

## Comentarios

1. `97` no tiene divisores aparte de `1` y de sí mismo, por lo que `is-prime` devuelve `True`.

1. `91` parece primo pero es `7 x 13`, por lo que `is-prime` devuelve `False`. El método hace la factorización por ti, que es precisamente la razón de tenerlo.

{% include nav.html %}
