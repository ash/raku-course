---
title: Solución de ‘Cuadrados y cubos’
---

{% include menu.html %}

## Código 1

Una solución sencilla es usar el operador `**`.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Encuentra el programa en el archivo [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube.raku).

## Código 2

Una solución un poco más elegante es usar superíndices Unicode.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Encuentra el programa en el archivo [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube-2.raku).

## Salida

Ejecuta el programa varias veces y pruébalo con diferentes números.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}