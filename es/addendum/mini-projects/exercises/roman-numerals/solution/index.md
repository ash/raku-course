---
title: 'Solución: Números romanos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @table =
    1000 => 'M', 900 => 'CM', 500 => 'D', 400 => 'CD',
    100  => 'C', 90  => 'XC', 50  => 'L', 40  => 'XL',
    10   => 'X', 9   => 'IX', 5   => 'V', 4   => 'IV',
    1    => 'I';

my $n = 1994;
my $roman = '';

for @table -> $pair {
    while $n >= $pair.key {
        $roman ~= $pair.value;
        $n -= $pair.key;
    }
}

say $roman;
```

🦋 Puedes encontrar el código fuente en el archivo [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Salida

```
MCMXCIV
```

## Comentarios

1. La tabla enumera todos los símbolos en orden descendente de valor, incluidas las
formas sustractivas como `CM` (900) y `IV` (4), así que el algoritmo nunca tiene que
tratarlas como casos especiales.

1. Para cada entrada, el `while` añade el símbolo y resta su valor tantas veces como
quepa, de modo que las piezas mayores se agotan primero.

{% include nav.html %}
