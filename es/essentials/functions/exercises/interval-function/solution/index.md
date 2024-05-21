---
title: 'Solución: Función de intervalo'
---

{% include menu.html %}

En esta función, se utiliza una construcción `if` de tres ramas. Las dos primeras ramas tienen una prueba booleana, pero la tercera verificación no es necesaria ya que es la única opción restante si el número no pasó ninguna de las dos primeras pruebas.

## Código

Aquí está la solución:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Encuentra el programa en el archivo [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Salida

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}