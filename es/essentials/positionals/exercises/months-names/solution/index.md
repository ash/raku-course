---
title: 'Solución: Nombres de los meses'
---

{% include menu.html %}

En este programa, los nombres de los meses se toman del array `@months` que contiene doce cadenas. Como los índices de los arrays comienzan en 0, necesitamos decrementar el número de entrada en 1 antes de subscriptar el array.

## Código

Aquí está la solución:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Encuentra el programa en el archivo [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Salida

Prueba ejecutar el programa varias veces para ver diferentes nombres de los meses.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Estilo

Depende de ti elegir una de las posibles formas de formatear las listas como la de este programa. Compara algunas opciones:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

O:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

También puedes listar todos los meses en una sola línea.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}