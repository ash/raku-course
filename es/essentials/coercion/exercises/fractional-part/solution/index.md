---
title: 'Solution: Parte fraccionaria'
---

{% include menu.html %}

Para obtener la parte fraccionaria de un número, puedes restar la parte entera, que puedes obtener convirtiendo el número a un `Int`.

## Código

La posible solución se muestra a continuación:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Encuentra el programa en el archivo [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Salida

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Comentario

Prueba el mismo programa con números negativos también, por ejemplo:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

En este caso, el resultado también debería ser correcto:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}