---
title: Usando repeat
---

{% include menu.html %}

Los bloques `while` y `until` pueden no ejecutarse nunca si la condición es inicialmente `False`. En contraste, el bloque `repeat` siempre se ejecuta al menos una vez. La condición de parada se verifica después del bloque de código. Usas las mismas palabras `while` o `until` para la prueba.

Considera este programa.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

La variable `$x` se establece inicialmente en `100`, y la condición `while` está verificando si `$x` es menor o igual a `10`. Con el valor dado de la variable, la condición ya es `False`, pero el bloque de código aún se ejecuta primero.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Vamos a modificar el programa para usar `until` en su lugar.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Ejecuta el programa para confirmar que funciona como se espera:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}