---
title: 'Solución: Espere una promesa'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Puedes encontrar el código fuente en el archivo [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Salida

```
(slow quick medium)
```

## Comentarios

1. Los tres trabajos arrancan a la vez y duermen de forma concurrente, así que el programa entero tarda unos `0.3` segundos: la duración del trabajo más lento, no la suma de los tres.

1. Aunque `quick` termina primero y `slow` el último, la salida es `(slow quick medium)`: `await` devuelve cada resultado en la misma posición que su promesa en `@jobs`. El orden de finalización afecta solo a *cuándo* retorna `await`, nunca a la disposición de los resultados.

{% include nav.html %}
