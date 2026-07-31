---
title: 'Solution: Clasificar el tamaño'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Puedes encontrar el código fuente en el archivo [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Salida

```
small
medium
large
```

## Comentarios

1. Los tres candidatos toman un único `Int`, así que sin las cláusulas `where` entrarían en conflicto. Las condiciones en los dos primeros los hacen distintos, y el tercero es el comodín.

1. Las cláusulas `where` prueban `$n.abs`, así que solo la magnitud decide el resultado y el signo se ignora. `size(7)` coincide con el primer candidato (`small`), mientras que `size(-250)` tiene un valor absoluto de `250`, que no cumple ninguna de las dos condiciones y cae al comodín (`large`).

1. Los candidatos se prueban del más específico al más general — exactamente en el orden en que están escritos aquí.

{% include nav.html %}
