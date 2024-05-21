---
title: Solución de ‘Examinando el resultado del prompt — Números’
---

{% include menu.html %}

## Código

Aquí está el programa completo que resuelve el problema e imprime tanto el valor ingresado como su tipo.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Puedes encontrar el código fuente en el archivo [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Ejecuciones de prueba

Ejecuta el programa varias veces e ingresa números de diferentes tipos.

### Enteros

Primero probemos con enteros, tanto positivos como negativos.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

El tipo del resultado es `IntStr`. Este es un tipo incorporado que tiene las características tanto de `Int` como de `Str`.

### Números racionales

Ahora probemos con un número racional. Recuerda que en Raku, la notación con un punto decimal crea un número `Rat` en lugar de un número de punto flotante.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Esta vez, el programa dice que el tipo de dato en `$n` es `RatStr`, que representa un tipo combinado de `Rat` y `Str`.

### Números de punto flotante

Finalmente, prueba un número en notación científica. Deberías poder adivinar la salida en este punto.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Efectivamente, el nuevo valor es del tipo `NumStr`.

{% include nav.html %}