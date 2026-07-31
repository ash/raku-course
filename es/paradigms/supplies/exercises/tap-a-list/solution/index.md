---
title: 'Solución: Conéctese a una lista'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Puedes encontrar el código fuente en el archivo [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Salida

```
red
green
blue
```

## Comentarios

1. `Supply.from-list` emite las tres cadenas en orden.

1. El enganche se ejecuta una vez por cada una, imprimiéndola.

{% include nav.html %}
