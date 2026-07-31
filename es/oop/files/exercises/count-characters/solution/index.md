---
title: 'Solución: Cuente los caracteres'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Puedes encontrar el código fuente en el archivo [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Salida

```
4
```

## Comentarios

1. `spurt` escribe la cadena `Raku` en el archivo.

1. `slurp` la vuelve a leer como cadena y `.chars` cuenta sus caracteres: cuatro.

1. Si inspeccionas el archivo, verás en efecto solo los cuatro caracteres; el salto de línea no se añade.

{% include nav.html %}
