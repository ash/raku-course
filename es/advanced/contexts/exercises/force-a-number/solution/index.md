---
title: 'Solution: Forzar un número'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my @a = 1, 2, 3;
say +@a;
```

🦋 Encuentra el código fuente en el archivo [force-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/force-a-number.raku).

## Salida

```
3
```

## Comentarios

1. El prefijo `+` fuerza el contexto numérico.

1. En contexto numérico, un array se convierte en su número de elementos, por lo que el resultado es `3`.

{% include nav.html %}
