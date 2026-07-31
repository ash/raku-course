---
title: 'Solución: Suma de dígitos por recursión'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Puedes encontrar el código fuente en el archivo [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Salida

```
15
```

## Comentarios

1. El caso base es un número de un solo dígito, que es su propia suma de dígitos. En
caso contrario la rutina desprende el último dígito con `$n % 10` y recurre sobre el
resto, `$n div 10`.

{% include nav.html %}
