---
title: 'Solution: Relajar strict'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Puedes encontrar el código fuente en el archivo [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Salida

```
30
```

## Comentarios

1. `no strict` desactiva el requisito de que las variables sean declaradas, así que `$a` y `$b` pueden ser asignadas sin un `my`. Con la pragma `strict` por defecto, cada una de esas líneas sería un error en tiempo de compilación.

1. Una vez asignadas, las variables se comportan normalmente, así que `$a + $b` es `30`. La relajación es léxica — dura solo hasta el final del ámbito donde aparece `no strict`.

1. Esto es una demostración, no una práctica recomendada: `strict` está activada por defecto por una buena razón — detecta errores tipográficos en nombres de variables en tiempo de compilación. En código real, mantenla activada y declara tus variables con `my`.

{% include nav.html %}
