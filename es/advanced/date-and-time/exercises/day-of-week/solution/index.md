---
title: 'Solution: Día de la semana'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Encuentra el programa en el archivo [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Salida

```
True
```

## Comentarios

1. `day-of-week` numera los días desde `1` (lunes) hasta `7` (domingo), por lo que los dos días del fin de semana son exactamente los números `6` y `7`.

1. La prueba `>= 6` es `True` tanto para el sábado como para el domingo, y `False` para cualquier día entre semana. El 14 de febrero de 2027 es un domingo (`7`), por lo que el programa imprime `True`.

{% include nav.html %}
