---
title: 'Solution: Desbordamiento cíclico'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Encuentra el programa en el archivo [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Salida

```
4
255
```

## Comentarios

1. Un `uint8` va de `0` a `255`, lo cual son 256 valores distintos. La aritmética sobre él se realiza efectivamente módulo 256.

1. `250 + 10` sería `260`, que no cabe. Se desborda, aterrizando en `260 - 256 = 4` pasado el límite inferior. Así que el desbordamiento no se limita a pasar del tope por uno — cualquier resultado fuera del rango se pliega de vuelta.

1. En la otra dirección también se desborda: decrementar `0` no puede dar `-1` en un tipo sin signo, así que se envuelve al máximo, `255`.

{% include nav.html %}
