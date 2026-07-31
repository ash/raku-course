---
title: 'Solución: Tipo de triángulo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Salida

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Comentarios

1. La guarda `unless` rechaza las longitudes de lado que rompen la desigualdad
triangular antes de que ocurra ninguna clasificación.

1. El número de longitudes de lado *distintas* dice la clase: una significa que todas
son iguales (equilátero), dos significan que hay exactamente un par igual (isósceles),
tres significan que todas son distintas (escaleno).

1. Desestructurar la variable del bucle como `-> ($a, $b, $c)` desempaqueta cada lista
interior directamente en tres lados con nombre.

{% include nav.html %}
