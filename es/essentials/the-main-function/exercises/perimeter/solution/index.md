---
title: 'Solución: Perímetro de un rectángulo'
---

{% include menu.html %}

Este programa debe ser capaz de tomar uno o dos argumentos de línea de comandos. Un nuevo truco se muestra en la solución aquí. El valor predeterminado del segundo variable se establece al valor del primer variable: `sub MAIN($a, $b = $a)`. Así que, en lugar de crear las dos multi-funciones, tenemos una función general que establece el tamaño del segundo lado si la figura es un cuadrado.

## Código

Aquí está la solución:

```raku
sub MAIN($a, $b = $a) {
    my $perímetro = 2 * ($a + $b);

    my $forma = $a == $b ?? 'cuadrado' !! 'rectángulo';
    say "El perímetro de un $forma es $perímetro.";
}
```

🦋 Encuentra el programa en el archivo [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/perimeter.raku).

## Salida

Prueba diferentes valores de entrada para probar tanto cuadrados como rectángulos.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
El perímetro de un cuadrado es 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
El perímetro de un rectángulo es 6.
```

Nota que hay un tercer caso que también debe ser probado. Si se pasan dos números iguales, el programa aún debe entender que esto fue un cuadrado:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
El perímetro de un cuadrado es 8.
```

{% include nav.html %}