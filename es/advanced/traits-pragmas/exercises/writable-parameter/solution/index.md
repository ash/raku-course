---
title: 'Solution: Un parámetro modificable'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Puedes encontrar el código fuente en el archivo [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Salida

```
42
```

## Comentarios

1. `is rw` vincula el parámetro `$n` a la variable del llamador `$score`, así que `$n *= 2` dentro de `double` cambia `$score` directamente — por eso imprime `42`.

1. Sin `is rw`, el parámetro sería de solo lectura y `$n *= 2` sería un error en tiempo de compilación. Marcarlo con `is copy` en cambio le daría a `double` una copia privada para modificar, dejando `$score` intacto en `21`.

{% include nav.html %}
