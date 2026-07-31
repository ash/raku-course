---
title: 'Solution: Contar hacia arriba'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Puedes encontrar el código fuente en el archivo [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Salida

```
9
10
```

## Comentarios

1. `++` es un operador postfijo: va después de su operando. Usado como expresión, `$n++` devuelve primero el valor *antiguo* `9` — que es lo que `say` imprime — y solo después incrementa la variable.

1. La segunda línea muestra que `$n` efectivamente se ha convertido en `10`. (La forma prefija `++$n` incrementaría primero y devolvería `10`.)

{% include nav.html %}
