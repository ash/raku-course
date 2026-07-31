---
title: 'Solución: Reformatee una fecha'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Puedes encontrar el código fuente en el archivo [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Salida

```
15/06/2025
```

## Comentarios

1. El patrón captura el año en `$0`, el mes en `$1` y el día en `$2`.

1. El reemplazo los escribe en el nuevo orden `$2/$1/$0`, con las barras protegidas como `\/`. El lado del reemplazo no lleva espacios alrededor, porque ahí los espacios se insertarían literalmente.

{% include nav.html %}
