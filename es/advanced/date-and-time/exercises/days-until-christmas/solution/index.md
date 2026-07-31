---
title: 'Solution: Semanas hasta Navidad'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Encuentra el programa en el archivo [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Salida

```
25 weeks and 6 days
```

## Comentarios

1. Restar un `Date` de otro devuelve el número de días entre ellos (aquí `181`), por lo que no es necesario contar manualmente los días de cada mes. La fecha posterior se escribe primero, de modo que el resultado sea positivo.

1. La división entera `div` da el número entero de semanas (`181 div 7` es `25`), y el operador módulo `%` da los días restantes (`181 % 7` es `6`).

{% include nav.html %}
