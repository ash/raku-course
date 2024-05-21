---
title: 'Solución: El último dígito'
---

{% include menu.html %}

La idea de la solución de esta tarea es usar la división modular por 10 para obtener el último dígito del número.

## Código

Aquí está la solución:

```raku
my $n = prompt 'Introduce un número: ';
my $d = $n % 10;
say "El último dígito de $n es $d.";
```

🦋 Encuentra el programa en el archivo [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/the-last-digit.raku).

## Salida

Ejecuta el programa e introduce un número entero positivo:

```console
$ raku exercises/numbers/the-last-digit.raku
Introduce un número: 1234
El último dígito de 1234 es 4.
```

## Comentario

Ten en cuenta que esto no funciona como se espera con números negativos, ya que, por ejemplo, `-11 % 10` es `9`, no `1`.

{% include nav.html %}