---
title: 'Solución: Sumar hasta pasar de cien'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Puedes encontrar el código fuente en el archivo [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Salida

```
reached 105 after adding 1..14
```

## Comentarios

1. Un `loop { }` a secas se repite para siempre; el `last if $sum > 100` es lo que lo
termina, en cuanto el total cruza el umbral.

1. `1 + 2 + … + 14` es `105`, la primera suma parcial que pasa de `100`, así que el
bucle se detiene con `$n` en `14`.

1. Puedes comprobar ese total con una [reducción](/es/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
