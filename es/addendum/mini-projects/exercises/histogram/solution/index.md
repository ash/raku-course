---
title: 'Solución: Un histograma de texto'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Salida

```
apples	#####
pears	###
plums	########
```

## Comentarios

1. El operador de repetición de cadenas `x` construye cada barra: `'#' x 5` es `#####`.
El valor pasa a ser sencillamente la longitud de la barra.

1. El `\t` entre la etiqueta y la barra es un carácter de tabulación, así que las barras
se alinean en una columna en lugar de empezar justo después de cada nombre, de longitud
distinta.

{% include nav.html %}
