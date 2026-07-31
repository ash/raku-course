---
title: 'Solución: Año y mes'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Puedes encontrar el código fuente en el archivo [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Salida

```
｢2025｣
｢06｣
```

## Comentarios

1. Se declaran dos regex con nombre, cada uno describiendo una pieza de la fecha: un `year` de cuatro dígitos y un `month` de dos.

1. El patrón los combina con un guion literal en medio, y cada uno se captura bajo su propio nombre. Construir un patrón mayor a partir de piezas pequeñas y bien nombradas como estas es exactamente la idea que formaliza una gramática.

{% include nav.html %}
