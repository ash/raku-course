---
title: 'Solution: Invertir y gritar'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
say 'raku'.flip.uc;
```

🦋 Encuentra el programa en el archivo [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Salida

```
UKAR
```

## Comentarios

1. Los métodos se aplican de izquierda a derecha: `flip` primero invierte `'raku'` en `'ukar'`, y luego `uc` lo convierte en `'UKAR'`.

1. Como cada método devuelve una nueva cadena, puedes encadenarlos en una sola expresión.

{% include nav.html %}
