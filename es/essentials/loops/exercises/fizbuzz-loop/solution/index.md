---
title: 'Solution: FizzBuzz en un bucle'
---

{% include menu.html %}

Esta vez, la comprobación de divisibilidad ocurre en un bucle. En lugar de imprimir directamente, la frase se acumula primero en una variable separada y luego se interpola en una cadena.

## Código

Aquí está la nueva solución:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Encuentra el programa en el archivo [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fizbuzz-loop.raku).

## Salida

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Comentario

Para un solucionador de problemas pedante, la solución puede no ser perfecta ya que imprime un espacio después de los dos puntos incluso para aquellos números que no obtuvieron ningún Fizz o Buzz. Modifica el programa para evitar ese problema.

{% include nav.html %}