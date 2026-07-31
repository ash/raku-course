---
title: 'Solución: Criba de Eratóstenes'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Puedes encontrar el código fuente en el archivo [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Salida

```
(2 3 5 7 11 13 17 19 23 29)
```

## Comentarios

1. En lugar de una lista de banderas, `%composite` recuerda qué números se han tachado.
Un número que sigue faltando en él cuando le llega el turno es primo.

1. Para cada primo `$i`, sus múltiplos se generan como la secuencia
`$i², $i² + $i ... $limit` y se marcan como compuestos. Empezar en `$i²` se salta los
múltiplos que ya trataron los primos más pequeños.

1. Esto es una sola [secuencia](/es/paradigms/lazy/sequence-operator), no una cabecera
de `for` al estilo de C. El operador `...` toma los dos primeros valores, deduce el paso
entre ellos y sigue hasta el límite. Para `$i` = `3` eso significa empezar en `9`, luego
`12`, así que el paso es `3`, y el bucle recorre la lista entera:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Así que `for` recibe una sola lista sobre la que iterar — `9, 12, 15, …` — en lugar
de tres cláusulas separadas.

1. `$i²` eleva el número al cuadrado usando un superíndice Unicode. Raku acepta las tres
formas `$i * $i`, `$i ** 2` y `$i²`: calculan exactamente el mismo valor, así que elige
la que mejor te suene. Los dígitos en superíndice (`²`, `³`, …) son caracteres
corrientes que puedes teclear o pegar directamente en el código fuente.

{% include nav.html %}
