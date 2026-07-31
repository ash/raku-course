---
title: 'Solution: Contar y totalizar'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Puedes encontrar el código fuente en el archivo [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Salida

```
4
41
```

## Comentarios

1. Las constantes se definen como pares, de modo que cada una recibe el valor que elegimos en lugar de la numeración automática desde cero.

1. `.enums` devuelve un mapa de cada nombre de constante a su valor. `.elems` cuenta las entradas — hay cuatro monedas.

1. `.values` extrae solo los números detrás de los nombres, y `.sum` los suma: `1 + 5 + 10 + 25` es `41`.

{% include nav.html %}
