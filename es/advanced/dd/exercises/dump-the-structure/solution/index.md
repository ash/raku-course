---
title: 'Solution: Volcar la estructura de datos'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Puedes encontrar el código fuente en el archivo [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Salida

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Comentarios

1. `dd @data` imprime una representación similar a código del contenido del arreglo. Se envía al flujo de error estándar.

1. El método `.raku` devuelve la misma representación como cadena, que luego se inserta en un mensaje normal usando interpolación de código y se imprime con `say` en la salida estándar.

1. Las dos líneas se ven iguales aquí, pero viajan por flujos de salida diferentes: la primera viene de `dd` (error estándar), la segunda de `say` (salida estándar). Compara lo siguiente:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
