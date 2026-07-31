---
title: Comparaciones y planes
translations_gpt: true
---

{% include menu.html %}

Además de `ok` e `is`, el módulo `Test` tiene comparaciones para diferentes tipos de valores. Las más útiles son:

* `is` — compara dos valores para verificar igualdad (como cadenas/números)
* `is-deeply` — compara dos estructuras de datos para verificar igualdad exacta con reconocimiento de tipos
* `like` — comprueba que una cadena coincide con una expresión regular
* `isnt` — pasa cuando dos valores **no** son iguales

`is-deeply` es la opción correcta para arreglos, hashes y datos anidados, porque compara la estructura y el tipo con precisión:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Esto imprime:

```
ok 1 - reversed
1..1
```

Donde `is` convertiría a cadena y compararía de forma flexible, `is-deeply` exige que las estructuras realmente coincidan. Observa que `done-testing` coloca el plan `1..1` al final, después de la comprobación.

En lugar de dejar que `done-testing` cuente las pruebas por ti, puedes indicar el número de antemano con `plan`. Esto protege contra un archivo de pruebas que termina antes de tiempo y omite comprobaciones en silencio:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Esta vez el plan aparece **primero**, antes de los resultados:

```
1..2
ok 1 - first
ok 2 - second
```

Esa es la diferencia visible con `done-testing`: `plan` imprime el conteo `1..2` al principio, antes de que se ejecute cualquier comprobación, mientras que `done-testing` lo imprime al final. En cualquier caso, con `plan 2` la ejecución espera exactamente dos pruebas; si se ejecutan menos (o más), el conjunto se reporta como fallido. Usa `plan` cuando el conteo es fijo y conocido, y `done-testing` cuando es más fácil dejar que el marco lo cuente.

{% include nav.html %}
