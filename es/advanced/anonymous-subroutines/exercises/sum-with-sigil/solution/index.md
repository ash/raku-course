---
title: 'Solution: Suma con el sigilo `&`'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Encuentra el programa en el archivo [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Salida

```
5
```

## Comentarios

1. El bloque puntiagudo enumera dos parámetros, `-> $a, $b`, por lo que la subrutina anonima toma dos argumentos.

1. Dado que la variable se declara con el sigilo `&`, se puede llamar como `add(2, 3)` exactamente como una subrutina con nombre — sin sigilo en el lugar de la llamada — dando `5`.

{% include nav.html %}
