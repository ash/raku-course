---
title: 'Solución: Compruebe el código de salida'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Puedes encontrar el código fuente en el archivo [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Salida

```
4
failure
```

## Comentarios

1. `run` devuelve un `Proc`. Guardarlo en `$proc` — y leerlo después — es importante aquí: una orden fallida cuyo `Proc` se descartara lanzaría una excepción, mientras que inspeccionar el resultado cuenta como manejarlo.

1. `.exitcode` es el número que devolvió la orden: `4`. Evaluar el `Proc` como booleano responde a la pregunta más simple: es verdadero solo cuando el código de salida es `0`, así que aquí es falso y el programa imprime `failure`.

{% include nav.html %}
