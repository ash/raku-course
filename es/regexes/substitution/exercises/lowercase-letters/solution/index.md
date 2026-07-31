---
title: 'Solución: Letras minúsculas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Puedes encontrar el código fuente en el archivo [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Salida

```
raku
```

## Comentarios

1. `tr///` mapea cada carácter del primer rango al carácter que está en la misma posición del segundo.

1. Aquí los rangos van de las letras mayúsculas a las minúsculas, así que cada mayúscula se reemplaza por su compañera minúscula: la dirección contraria a pasar a mayúsculas.

{% include nav.html %}
