---
title: 'Solución: Una letra o un dígito'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Puedes encontrar el código fuente en el archivo [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Salida

```
｢x｣
```

## Comentarios

1. Una clase puede contener varios rangos, uno tras otro. `<[a..z 0..9]>` empareja un carácter que sea una letra minúscula **o** un dígito. El espacio entre los dos rangos está ahí solo por legibilidad: `<[a..z0..9]>` significa exactamente lo mismo, porque los espacios dentro de `<[…]>` se ignoran, igual que en el resto de un regex.

1. Recorriendo desde la izquierda, los dos espacios y la `@` no están en la clase y se saltan; el primer carácter que coincide es `x`. (Esta clase combinada se parece a lo que representa el atajo `\w`.)

{% include nav.html %}
