---
title: Solución a 'Doble negación’
---

{% include menu.html %}

Extendamos el programa para resolver la segunda parte del ejercicio y reutilicemos la misma variable:

## Código

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Puedes encontrar el código completo en el archivo [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Comentarios

Antes de ejecutar el programa, pensemos en lo que imprimirá. Hay dos operadores de negación antes de la variable. Actúan como dos operadores de negación. En el primer caso, el valor se invierte de `False` a `True`, y luego se invierte inmediatamente de nuevo de `True` a `False`. En el segundo caso, el algoritmo es el mismo: después de dos negaciones, obtenemos el valor booleano inicial.

## Salida

El programa imprime la siguiente salida, lo que confirma las consideraciones anteriores:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}