---
title: 'Solution: Sumar todos los argumentos'
---

{% include menu.html %}

Aquí está una posible solución a la tarea.

## Código

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Encuentra el programa en el archivo [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Salida

```
15
```

## Comentarios

1. El parámetro slurpy `*@nums` recolecta todos los argumentos en el array `@nums`, sin importar cuántos sean.

1. El meta-operador de reducción `[+]` luego los suma todos, dando `15`.

{% include nav.html %}
