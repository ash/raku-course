---
title: 'Solución: Año bisiesto'
---

{% include menu.html %}

## Descargo de responsabilidad

La solución mostrada a continuación tiene como objetivo entrenarte en el uso de comprobaciones condicionales. En la vida real, puedes aprender los métodos de la clase `Date` incorporada. Lo aprenderemos en la segunda parte del curso.

## Solución

El algoritmo para detectar si un año es bisiesto:

1. si el año no es divisible por 4 => año común
1. si el año no es divisible por 100 => año bisiesto
1. si el año no es divisible por 400 => año común
1. de lo contrario => año bisiesto

Ten en cuenta que puedes usar los tipos incorporados para trabajar con fechas y horas, así que volveremos a esta tarea en la segunda parte del curso.

## Código 1

La primera solución reproduce los pasos anteriores literalmente:

```raku
my $year = prompt 'Year: ';

if $year % 4 {
    say 'Common year';
}
elsif $year % 100 {
    say 'Leap year';
}
elsif $year % 400 {
    say 'Common year';
}
else {
    say 'Leap year';
}
```

🦋 Encuentra el programa en el archivo [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year.raku).

## Código 2

En la segunda solución, la lógica está empaquetada en una sola expresión. Los paréntesis no siempre son necesarios, pero se agregan aquí para mayor claridad.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Encuentra el programa en el archivo [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year-formula.raku).

## Salida

Prueba ambos programas con los casos más críticos, por ejemplo, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Year: 1900
Common year

$ raku exercises/conditional-checks/leap-year.raku
Year: 2000
Leap year
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2020
Leap year

$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2021
Common year
```

%%tipblock
## `%%` vs `%`

Ten en cuenta que en contextos booleanos, los operadores `%%` y `%` son complementarios. Puedes usar este hecho para elegir uno de los operadores y evitar la comparación explícita con cero.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # False
```
%%/tipblock

{% include nav.html %}