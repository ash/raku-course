---
title: 'Solución: Notas a partir de líneas CSV'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Puedes encontrar el código fuente en el archivo [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Salida

```
average: 82
above average:
  Anna
  Cara
```

## Comentarios

1. Dividir cada línea por la coma y asignar a `($name, $mark)` desempaqueta los dos
campos de una vez; `.Int` convierte el texto de la puntuación en un número.

1. La media es la suma de los valores entre su recuento; se enumera a todo aquel cuya
puntuación la supere. Aquí la media sale un `82` entero.

1. Ese bucle final se puede escribir como una tubería. `sort` ordena los pares, `grep`
conserva los que están por encima de la media y `map` reduce cada par superviviente a su
nombre, de modo que el cuerpo del bucle no lleva lógica, solo la impresión:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Leído de izquierda a derecha, esto dice exactamente lo que hace: ordena, conserva los
que están por encima de la media, toma sus nombres. Cada etapa es un paso pequeño y
autónomo, y `*.value` / `*.key` son [estrellas Whatever](/es/advanced/whatever) que
construyen sobre la marcha un bloque de un argumento.

{% include nav.html %}
