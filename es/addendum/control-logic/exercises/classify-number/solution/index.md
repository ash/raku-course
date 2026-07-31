---
title: 'Solución: Signo y paridad'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Puedes encontrar el código fuente en el archivo [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Salida

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Comentarios

1. El signo se elige con un ternario *encadenado*: `negative` cuando está por debajo
de cero, si no `zero` cuando es igual, si no `positive`.

1. `$n %% 2` comprueba la divisibilidad por dos, así que es verdadero para los números
pares y falso para los impares. (El `0` cuenta como par.)

{% include nav.html %}
