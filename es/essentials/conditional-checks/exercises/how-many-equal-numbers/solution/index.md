---
title: 'Solución: ¿Cuántos números son iguales?'
---

{% include menu.html %}

El programa debe hacer algunas comparaciones. Para tres números de entrada, hay dos casos posibles:

1. Los tres números son iguales,
1. Solo dos números son iguales, y
1. Todos los números son diferentes.

## Código

Aquí está la solución con comparaciones explícitas.

```raku
my $n1 = prompt 'Ingrese el número 1: ';
my $n2 = prompt 'Ingrese el número 2: ';
my $n3 = prompt 'Ingrese el número 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Encuentra el programa en el archivo [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Salida

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Ingrese el número 1: 14
Ingrese el número 2: 8
Ingrese el número 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Ingrese el número 1: 15
Ingrese el número 2: 15
Ingrese el número 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Ingrese el número 1: 4
Ingrese el número 2: 6
Ingrese el número 3: 8
0
```

## Comentarios

1. Nota que puedes comparar tres números en una sola expresión: `$n1 == $n2 == $n3`.
1. Vuelve a esta tarea y resuélvela nuevamente después de aprender sobre el operador de reducción.

{% include nav.html %}