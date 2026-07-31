---
title: 'Solution: El valor de un bloque do'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Puedes encontrar el código fuente en el archivo [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Salida

```
big
```

## Comentarios

1. Un `if` simple es una sentencia y no tiene un valor utilizable. El prefijo `do` convierte todo el `if`/`else` en una expresión.

1. Dado que `7 > 5` es verdadero, la expresión produce `'big'`, que se asigna a `$label`. El mismo truco funciona con `do given` y `do for`.

1. Las llaves `{ }` no son opcionales. El `if` de Raku siempre toma un bloque, así que no puedes acortar las ramas a `if 7 > 5 'big' else 'small'`; eso falla al compilar con *Missing block*.

{% include nav.html %}
