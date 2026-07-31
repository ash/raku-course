---
title: 'Solución: Analice una fecha con capturas con nombre'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Puedes encontrar el código fuente en el archivo [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Salida

```
year: 2026, month: 07, day: 03
```

## Comentarios

1. `$<year>=( ... )` le da un nombre a una captura. Tras una coincidencia con éxito,
`$<year>`, `$<month>` y `$<day>` contienen las piezas capturadas.

1. `\d ** 4` significa exactamente cuatro dígitos, así que el patrón solo coincide con
una fecha con la forma adecuada.

{% include nav.html %}
