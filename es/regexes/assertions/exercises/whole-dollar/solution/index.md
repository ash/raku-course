---
title: 'Solución: Entre corchetes'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Puedes encontrar el código fuente en el archivo [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Salida

```
｢50｣
```

## Comentarios

1. `<?after '$'>` es un lookbehind positivo — exige un `$` justo antes del número — y `<!before '.'>` es un lookahead negativo — exige que **no** siga un `.`. Ni el `$` ni el entorno pasan a formar parte de la coincidencia, así que el resultado es solo `50`.

1. El `>>` es un límite de palabra que marca el final del número. Sin él, el voraz `\d+` podría retroceder: en `$39.99` cedería el `9` y emparejaría `3` (al que no le sigue `.`). `>>` obliga a tomar el número entero, así que `$3.99` y `$39.99` no emparejan nada, como debe ser.

1. Este es un caso donde un lookahead se gana el sueldo: no puedes expresar «no seguido por un punto decimal» con un grupo de captura ordinario, porque ahí no hay nada que capturar, solo una condición que comprobar.

{% include nav.html %}
