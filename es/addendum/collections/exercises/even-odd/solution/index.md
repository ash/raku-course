---
title: 'Solución: Separe en pares e impares'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Puedes encontrar el código fuente en el archivo [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Salida

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Comentarios

1. `* %% 2` es verdadero para los números divisibles por dos; `* % 2` es verdadero
cuando el resto no es cero, es decir, para los impares. Cada `grep` conserva un grupo.

1. Interpolar `@even[]` con la rebanada zen de corchetes vacíos imprime los elementos
separados por espacios dentro de la cadena entre comillas dobles.

{% include nav.html %}
