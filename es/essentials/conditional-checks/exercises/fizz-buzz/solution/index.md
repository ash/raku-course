---
title: 'Solution: FizzBuzz'
---

{% include menu.html %}

Esta tarea es una tarea clásica de entrevista que ayuda a verificar si piensas en los casos cuando ambas condiciones son `True`. Si el número es divisible por ambos 3 y 5, el programa debe imprimir `FizzBuzz`.

## Código

Aquí está la solución:

```raku
my $n = prompt 'Enter a number: ';

print 'Fizz' if $n %% 3;
print 'Buzz' if $n %% 5;
print "\n";
```

🦋 Encuentra el programa en el archivo [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/fizz-buzz.raku).

## Ejemplo

Necesitas probar algunas clases de datos de entrada:

* Los números divisibles por 3, por ejemplo: 3, 6, 9, 12.
* Los números divisibles por 5, por ejemplo: 5, 10, 15, 20.
* Los números divisibles por 3 y por 5, por ejemplo: 15, 30, 45.
* Otros números, que no son divisibles ni por 3 ni por 5, por ejemplo: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Enter a number: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Enter a number: 30
FizzBuzz
```

{% include nav.html %}