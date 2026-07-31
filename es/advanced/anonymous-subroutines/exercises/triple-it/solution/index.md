---
title: 'Solution: Triplicar'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Encuentra el programa en el archivo [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Salida

```
21
```

## Comentarios

1. El bloque puntiagudo usa `$factor`, una variable del ámbito circundante, aunque solo tiene un parámetro `$x`. Capturar tales variables es lo que lo convierte en una clausura.

1. Con `$factor` igual a `3`, llamar a `$scale(7)` da `21`. Cambia `$factor` y el mismo bloque escalaría por el nuevo valor:

```raku
$factor = 5;
say $scale(7); # 35
```

Dado que la clausura captura la *variable* en lugar de su valor en el momento en que fue escrita, la llamada posterior ve el `$factor` actualizado y devuelve `35`.

{% include nav.html %}
