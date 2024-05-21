---
title: while
---

{% include menu.html %}

El constructo `while` tiene una condición booleana y un bloque de código. Raku ejecuta el bloque de código repetidamente _mientras_ la condición sea `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Introduce un número, que no sea mayor que 10: ';
    say "Has introducido $x.";
}
say "$x es mayor que 10.";
```

El programa pide introducir un número, y si el número no es mayor que 10, el cuerpo del bucle se repite. Tan pronto como el número introducido rompe la condición `$x <= 10`, el bucle termina y se ejecuta la siguiente línea del programa.

```console
$ raku t.raku
Introduce un número, que no sea mayor que 10: 10
Has introducido 10.
Introduce un número, que no sea mayor que 10: 4
Has introducido 4.
Introduce un número, que no sea mayor que 10: 1
Has introducido 1.
Introduce un número, que no sea mayor que 10: 20
Has introducido 20.
20 es mayor que 10.
```

{% include nav.html %}