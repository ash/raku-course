---
title: Parámetros posicionales
---

{% include menu.html %}

El orden de los parámetros de una función es importante. Por ejemplo, crea una función que calcule la diferencia entre dos números:

```raku
sub diff($a, $b) { $a - $b }
```

Es obvio que el resultado de llamar a `diff(10, 20)` difiere de `diff(20, 10)`.

Los parámetros que se enumeran como una lista separada por comas, como en la función anterior, se llaman _posicionales_. Su significado depende del orden en que los argumentos se pasan a la función cuando se llama.

{% include nav.html %}