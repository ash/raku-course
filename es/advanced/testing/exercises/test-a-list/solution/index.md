---
title: 'Solution: Planificar dos verificaciones'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Puedes encontrar el código fuente en el archivo [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Salida

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Comentarios

1. `plan 2` indica el conteo antes de que se ejecute cualquier prueba, por lo que la línea `1..2` aparece primero. Si el archivo ejecutará un número diferente de comprobaciones, el conjunto se reportaría como fallido — una protección que `done-testing` no puede ofrecerte.

1. `is-deeply` compara las dos listas para verificar igualdad exacta con reconocimiento de tipos. Ordenar `3, 1, 2` da `1, 2, 3`, lo cual coincide.

1. `is` compara dos valores para verificar igualdad simple e informa ambos en caso de fallo. Aquí `10 % 3` es `1`, que coincide con el valor esperado, por lo que la segunda prueba también pasa.

{% include nav.html %}
