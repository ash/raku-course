---
title: 'Solution: Si el número está dentro de los límites'
---

{% include menu.html %}

El programa utiliza un rango que se crea a partir de los números que el usuario ingresa. Luego, la verificación de coincidencia inteligente prueba si el tercer número está dentro de los límites del rango. El resultado de la prueba de coincidencia inteligente es un valor booleano, por lo que podemos imprimirlo inmediatamente.

## Código

Aquí está la solución:

```raku
my $begin = prompt 'Desde (incluido): ';
my $end = prompt 'Hasta (excluido): ';

my $n = prompt '¿Cuál es el número? ';

say $n ~~ $begin ..^ $end;
```

🦋 Encuentra el programa en el archivo [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/ranges/number-in-limits.raku).

## Salida

Prueba diferentes casos, incluyendo cuando el número coincide con el final del rango.

```console
$ raku exercises/ranges/number-in-limits.raku
Desde (incluido): 1
Hasta (excluido): 2
¿Cuál es el número? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
Desde (incluido): 100
Hasta (excluido): 200
¿Cuál es el número? 100
True

$ raku exercises/ranges/number-in-limits.raku
Desde (incluido): -5
Hasta (excluido): -2
¿Cuál es el número? -2
False
```

## Comentario

Observa cómo el extremo derecho del rango está excluido: `$begin ..^ $end`.

{% include nav.html %}