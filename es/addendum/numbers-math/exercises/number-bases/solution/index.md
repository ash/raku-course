---
title: 'Solución: Un número, tres bases'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Puedes encontrar el código fuente en el archivo [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Salida

```
11111111
377
FF
```

## Comentarios

1. El método `.base` representa un entero en cualquier base de 2 a 36, devolviendo una
cadena. `255` es `11111111` en binario y `FF` en hexadecimal: el mayor valor que cabe
en un byte.

{% include nav.html %}
