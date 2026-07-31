---
title: 'Solución: Suma de los cuadrados pares'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Puedes encontrar el código fuente en el archivo [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Salida

```
220
```

## Comentarios

1. La cadena se lee de izquierda a derecha: `.grep(* %% 2)` conserva los números pares,
`.map(* ** 2)` eleva cada uno al cuadrado, y `[+]` reduce los cuadrados a su suma.

1. Los números pares `2 4 6 8 10` elevados al cuadrado dan `4 16 36 64 100`, que suman
`220`.

1. Los mismos pasos se pueden escribir como una [tubería de flujo](/es/paradigms/feeds/feed-operator),
donde `==>` pasa cada resultado a la etapa siguiente, de modo que el flujo se lee de
arriba abajo en lugar de como una cadena de métodos:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Cada `==>` alimenta con su lista izquierda la rutina siguiente, y el `==> say()`
    final imprime el total, `220`.

{% include nav.html %}
