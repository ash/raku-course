---
title: 'Solution: Números de Fibonacci'
---

{% include menu.html %}

El siguiente algoritmo define los números de Fibonacci.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Código

El código implementa el algoritmo literalmente. Utiliza un par de variables para mantener los dos números de Fibonacci actuales y los actualiza en un bucle. Nota que ambas variables se actualizan [en una sola asignación](/es/essentials/scalar-variables/assigning-a-value/#multiple-assignment). 

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Encuentra el programa en el archivo [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fibonacci-numbers.raku).

## Salida

Aquí está la salida del programa que imprime los primeros 20 números.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Más sobre este tema

Recuerda esta tarea ya que volveremos a ella en el futuro para obtener otra solución emocionante con _secuencias_ en Raku.

{% include nav.html %}