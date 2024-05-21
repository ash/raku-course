---
title: until
---

{% include menu.html %}

El constructo `until` es opuesto a `while`. Ejecuta el bloque de código hasta que la condición se vuelva `True` (o, en otras palabras, mientras sea `False`).

Aquí hay un [programa modificado de la página anterior](../while) que usa `until` y una nueva condición:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Introduce un número que no sea mayor que 10: ';
    say "Has introducido $x.";
}
say "$x es mayor que 10.";
```

Ejecuta el programa y verifica la salida:

```console
$ raku t.raku 
Introduce un número que no sea mayor que 10: 10
Has introducido 10.
Introduce un número que no sea mayor que 10: 4
Has introducido 4.
Introduce un número que no sea mayor que 10: 1
Has introducido 1.
Introduce un número que no sea mayor que 10: 20
Has introducido 20.
20 es mayor que 10.
```

## `until` vs. `while`

Compara los programas equivalentes con `while` y `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Como puedes ver, las condiciones son versiones negadas una de la otra. En este sentido, `while` y `until` están en las mismas relaciones que `if` y `unless`.

{% include nav.html %}