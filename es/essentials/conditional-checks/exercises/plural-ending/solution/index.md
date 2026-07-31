---
title: 'Solution: Terminación plural'
---

{% include menu.html %}

El programa debe verificar si el número ingresado es mayor que uno y ponerlo en forma plural.

## Código

```raku
my $n = prompt '¿Cuántos archivos copiar? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n archivo{$ending} copiado.";
```

🦋 Encuentra el programa en el archivo [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/plural-ending.raku).

## Salida

Ejecuta el programa al menos dos veces y pruébalo con la entrada `1` y con cualquier otro número entero positivo:

```console
$ raku exercises/conditional-checks/plural-ending.raku
¿Cuántos archivos copiar? 10
10 archivos copiados.

$ raku exercises/conditional-checks/plural-ending.raku
¿Cuántos archivos copiar? 1
1 archivo copiado.
```

## Comentario

Probablemente, tiendes a escribir incorrectamente un solo `?` en lugar de doble `??` y/o un dos puntos `:` en lugar de `!!`.

{% include nav.html %}