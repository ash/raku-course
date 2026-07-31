---
title: 'Solution: Triple negación'
---

{% include menu.html %}

El programa mostrado en la tarea no se compilará y requiere una pequeña corrección. Aquí está la variante correcta y funcional (se añadió un espacio para separar `!` y `!!`):

## Código

```raku
my $value = False;
say ! !!$value;
```

🦋 Puedes encontrar el código completo en el archivo [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/triple-negation.raku).

## Salida

El programa imprime un valor Booleano invertido como probablemente esperabas:

```console
$ raku triple-negation.raku
True
```

## Comentarios

Fue un poco inesperado que el programa con tres signos de exclamación no se compilará:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Un espacio adicional soluciona este problema. Pero no caigas en otra trampa. Considera el siguiente programa:

```raku
my $value = False;
say !!! $value;
```

Este programa se compila pero termina con el siguiente mensaje:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Esto ocurre porque `!!!` es un operador especial para marcar parte del código como código de prueba. Si el programa llega a este punto, termina e imprime el mensaje, que en nuestro caso era el valor actual de la variable `$value`. Consulta 📖 [la documentación](https://docs.raku.org/routine/!!!) para más detalles.

{% include nav.html %}