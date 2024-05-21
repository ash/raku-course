---
title: Solución de 'Intercambiar los valores'
---

{% include menu.html %}

En este programa, estamos utilizando los elementos de la sintaxis de Raku de la sección sobre [variables escalares](/es/essentials/scalar-variables).

## Código

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Puedes encontrar el código fuente en el archivo [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Salida

Ejecuta el programa y confirma que imprime los valores en un orden diferente.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Comentarios

Todos los pasos de este programa (crear una variable y asignar los valores, intercambiarlos y imprimir) usan ambas variables en la misma construcción. Lo más interesante aquí es la forma en que las variables intercambian sus valores:

```raku
($a, $b) = $b, $a;
```

Observa que necesitas paréntesis en el lado izquierdo, pero también puedes agregarlos en el lado derecho:

```raku
($a, $b) = ($b, $a);
```

¿Qué pasa si omites los paréntesis?

```raku
$a, $b = $b, $a;
```

En este caso, obtienes una advertencia de que `$a` en el lado derecho no se usa:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

La línea anterior es en realidad equivalente a una asignación inútil `$b = $b`. Puedes verlo fácilmente si modificas los valores en el lado derecho, por ejemplo:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Este programa imprime aún más advertencias, pero también puedes ver que solo `$b` cambió su valor:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}