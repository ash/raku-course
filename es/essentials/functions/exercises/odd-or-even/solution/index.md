---
title: 'Solution: Impar o par'
---

{% include menu.html %}

El cuerpo de la función es bastante pequeño, lo cual es una razón válida para omitir tanto la rutina `return` como el punto y coma al final de la línea.

## Código

Aquí está la solución:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Encuentra el programa en el archivo [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/odd-or-even.raku).

## Salida

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}