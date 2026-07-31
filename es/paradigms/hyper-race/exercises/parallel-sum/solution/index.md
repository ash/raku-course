---
title: 'Solución: Una suma con race'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Puedes encontrar el código fuente en el archivo [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Salida

```
22100
```

## Comentarios

1. `.race` ejecuta la cadena entera — elevar al cuadrado cada número y filtrar los cuadrados pares — en paralelo y, a diferencia de `.hyper`, no promete devolver los elementos en orden.

1. Aquí eso no importa, porque el paso final es una suma, que no depende del orden: los cuadrados pares (`2²`, `4²`, …, `50²`) suman `22100` sin importar en qué orden lleguen. Cuando solo combinas los resultados (suma, recuento), `.race` es la elección natural y puede acarrear algo menos de sobrecarga que `.hyper`.

{% include nav.html %}
