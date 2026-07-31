---
title: 'Solución: Cuente las emisiones'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Puedes encontrar el código fuente en el archivo [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Salida

```
5
```

## Comentarios

1. El enganche se ejecuta una vez por valor emitido, sean cuales sean los valores.

1. Incrementar `$count` cada vez da el número total de valores, `5`.

{% include nav.html %}
