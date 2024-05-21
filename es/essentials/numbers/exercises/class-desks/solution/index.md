---
title: Solución a ‘Class desks’
---

{% include menu.html %}

La solución al problema se muestra a continuación.

## Código

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Puedes encontrar el código completo en el archivo [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Salida

Ejecuta el programa al menos dos veces probando con un número impar y par de estudiantes. Por ejemplo, para los números de entrada `23` y `24`, el programa imprime el mismo resultado:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Comentarios

No es suficiente solo dividir el número de estudiantes por dos. Es importante manejar tanto números impares como pares. Una de las posibles soluciones para redondear el número hacia arriba es: `$students div 2 + $students % 2`. Cuando el número de estudiantes es par, el segundo componente es cero, y el resultado es igual a la mitad del número de estudiantes. Pero cuando el número de estudiantes es impar, el primer componente sigue siendo un número entero debido a `div` en lugar de `/`, y el segundo término de la expresión añade un escritorio extra.

{% include nav.html %}