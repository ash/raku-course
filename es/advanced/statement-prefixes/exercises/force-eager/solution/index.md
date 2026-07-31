---
title: 'Solution: Forzar evaluación ansiosa'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Puedes encontrar el código fuente en el archivo [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Salida

```
True
False
True
```

## Comentarios

1. Un rango hasta `Inf` no puede calcularse todo de una vez, así que es perezoso: `.is-lazy` reporta `True`.

1. El prefijo `eager` fuerza a que una lista se produzca inmediatamente, por lo que el resultado ya no es perezoso: `.is-lazy` reporta `False`. Este es el equivalente directo de marcar una lista como `lazy`.

1. No apliques `eager` a un rango sin límite: `eager 1 .. Inf` intenta calcular todos los elementos de una vez, así que el programa simplemente se cuelga, consumiendo cada vez más memoria hasta que es terminado. `eager` solo es seguro en listas que sabes que son finitas.

1. Lo inverso también funciona: `lazy 1..3` marca incluso un rango corto y finito como perezoso, así que `.is-lazy` reporta `True`. El prefijo establece la bandera de pereza sin importar cuán pequeña sea la lista: no tiene que ser infinita para ser perezosa.

{% include nav.html %}
