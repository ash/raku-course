---
title: 'Solution: Una semana después'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Encuentra el programa en el archivo [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Salida

```
2027-03-07
7
```

## Comentarios

1. `later(:days(7))` avanza la fecha siete días, es decir, una semana. También podríamos haber escrito `+ 7`, pero el argumento con nombre indica la unidad explícitamente.

1. Febrero de 2027 tiene 28 días, por lo que una semana después del 28 pasa automáticamente a marzo: el resultado es `2027-03-07`.

1. Llamar a `day-of-week` sobre la nueva fecha da `7`. Esto facilita la verificación del resultado: una fecha exactamente una semana después debe caer en el *mismo* día de la semana que la original, y `2027-02-28` también es un domingo (`7`), por lo que un `7` aquí es la respuesta esperada.

{% include nav.html %}
