---
title: Devolviendo el resultado
---

{% include menu.html %}

Las funciones a menudo no solo hacen algo, sino que también devuelven un resultado. Por ejemplo, en la programación funcional, las funciones no deben producir efectos secundarios como imprimir en la consola. Sin embargo, Raku no te limita de hacerlo. Veamos cómo devolver un valor de una función y cómo obtenerlo en el código que llama.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Aquí, la función llamada `add` toma dos números y devuelve su suma. Se usa un `return` explícito. En el lado de la llamada, el valor que la función devuelve se puede usar como cualquier otro valor. En el programa anterior, se asigna a una variable.

## El último valor evaluado

En Raku, un `return` explícito no es necesario si el resultado que deseas devolver de una función es el último valor calculado en su cuerpo. Nuestra función `add` se puede simplificar:

```raku
sub add($x, $y) {
    $x + $y
}
```

Como habrás notado, no hay punto y coma al final de la línea ya que no es necesario cuando la línea termina el bloque de código actual.

Funciones tan triviales y pequeñas a menudo se formatean en una sola línea para un código más compacto:

```raku
sub add($x, $y) { $x + $y }
```

## Sin datos de retorno

Si necesitas devolver desde una función antes del final de su cuerpo, y la función no devuelve ningún resultado, usa un `return` vacío.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x está por encima del límite";
}
```

{% include nav.html %}