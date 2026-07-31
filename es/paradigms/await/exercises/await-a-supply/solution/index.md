---
title: 'Solución: Espere un supply'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Puedes encontrar el código fuente en el archivo [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Salida

```
final reading: 23
```

## Comentarios

1. Esperar un supply se bloquea hasta que el flujo ha emitido todo lo que tenía — la misma «espera hasta que acabe» que `await` da para una promesa — y su valor es lo **último** que emitió el supply, `23`.

1. Esto encaja con un flujo en el que solo importa el estado final, como la lectura más reciente de un sensor. Si necesitas *todos* los valores, eso es tarea de `.tap` o de un bloque `react`, como en las secciones anteriores.

{% include nav.html %}
