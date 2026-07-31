---
title: 'Solución: Lista separada por comas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Puedes encontrar el código fuente en el archivo [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Salida

```
Raku, is, fun
```

## Comentarios

1. Aquí el bloque **construye** un valor en lugar de elegir uno: `$a` es la cadena ensamblada hasta el momento y `$b` es la palabra siguiente, y `"$a, $b"` las pega con una coma y un espacio.

1. La primera llamada une `'Raku'` e `'is'` en `Raku, is`; la segunda une eso con `'fun'` para dar `Raku, is, fun`. Esta es la clase de unión con separador que el metaoperador `[~]` no puede expresar por sí solo.

1. En código real recurrirías al método integrado `join`, que hace exactamente esto: `say @words.join(', ');` imprime el mismo `Raku, is, fun`. La gracia del ejercicio es practicar cómo expresar la misma idea como un bloque de `reduce`.

{% include nav.html %}
