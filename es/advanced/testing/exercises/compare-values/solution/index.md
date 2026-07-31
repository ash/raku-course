---
title: 'Solution: Comparar valores'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Puedes encontrar el código fuente en el archivo [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Salida

```
ok 1 - uppercase
1..1
```

## Comentarios

1. `is` compara el valor real `'a'.uc` con el esperado `'A'`.

1. Coinciden, así que la prueba pasa; en caso de fallo, `is` imprimiría ambos valores.

{% include nav.html %}
