---
title: Solución a ‘Suma de números’
---

{% include menu.html %}

Aquí está la solución al problema.

## Código

```raku
my $a = prompt 'Ingrese el número A: ';
my $b = prompt 'Ingrese el número B: ';
my $c = prompt 'Ingrese el número C: ';

my $sum = $a + $b + $c;

say "La suma de los números es $sum.";
```

🦋 Puedes encontrar el código completo en el archivo [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Salida

Ejecuta el programa varias veces y confirma que funciona con números de diferentes tipos.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Ingrese el número A: 1.2
Ingrese el número B: -3.4
Ingrese el número C: 45
La suma de los números es 42.8.
```

## Comentarios

Nota que estamos usando directamente el valor devuelto por la rutina `prompt`. Eso puede causar problemas si el usuario ingresa una cadena que no representa un valor. Podemos mejorar el programa en el futuro después de aprender sobre excepciones.

{% include nav.html %}