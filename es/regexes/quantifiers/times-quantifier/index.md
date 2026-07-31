---
title: El cuantificador de repeticiones
translations_gpt:
---

{% include menu.html %}

Cuando necesitas un número exacto de repeticiones, o un rango, usa el cuantificador `**` seguido de un número:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` empareja exactamente cuatro dígitos seguidos.

Un rango con dos puntos admite una cantidad variable. Por ejemplo, `\d ** 2..3` empareja dos o tres dígitos, tantos como haya disponibles hasta tres:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

El patrón tomó tres dígitos, porque tres es lo máximo que le permite el rango `2..3`.

También puedes dejar abierto el extremo superior. `\d ** 2..*` significa «dos o más dígitos», y `\d ** 1..*` significa lo mismo que `\d+`.

El cuantificador `**` es la forma general; `*`, `+` y `?` son solo atajos cómodos para los casos comunes `0..*`, `1..*` y `0..1`.

{% include nav.html %}
