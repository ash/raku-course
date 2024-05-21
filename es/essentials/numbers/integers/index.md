---
title: Números enteros en Raku
---

{% include menu.html %}

El tipo de dato `Int` representa números enteros. Los números pueden ser positivos y negativos, y puedes usar un signo `+` explícito si lo deseas. Aquí hay algunos ejemplos obvios:

```raku
42
-42
100
-5
0
```

Sí, un `0` sin más se considera un entero por defecto.

## Grupos de dígitos

Raku tiene una característica interesante que te permite escribir números grandes con algunos ayudantes visuales que dividen los dígitos en grupos de miles:

```raku
1_000_000
-3_141_592
```

Aunque puedes construir un número como `34_56`, es mejor evitarlo ya que esto puede confundir a otras personas que lean tu código. Pero no puedes tener dos guiones bajos adyacentes, ni tampoco puedes comenzar ni terminar el número con uno.

## Enteros arbitrariamente largos

Raku maneja perfectamente los números más allá de los límites de 32 o 64 bits. Por ejemplo, el siguiente programa es un programa aceptable que multiplica dos números enteros grandes e imprime el resultado correcto.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}