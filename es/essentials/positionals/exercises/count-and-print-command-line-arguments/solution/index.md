---
title: Solución de ‘Contar e imprimir argumentos de línea de comandos’
---

{% include menu.html %}

En este programa, un bucle `for` es una buena elección.

## Código

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Encuentra el programa en el archivo [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Salida

Ejecuta el programa y confirma que imprime los argumentos y los números de línea:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Discusión

Este programa utiliza algunos trucos útiles. Primero, el bucle `for` recorre el [rango construido con `^`](/es/essentials/ranges/excluding-endpoints). Así, el rango comienza desde 0 y llega hasta (pero sin incluir) el valor de `@*ARGS`. En este contexto, [devuelve](/es/essentials/positionals/arrays#size) la longitud del array.

Como el primer elemento de un array tiene índice `0`, y la tarea requiere que contemos las líneas desde `1`, este simple desplazamiento se calcula [dentro de un bloque de código](/es/essentials/strings/code-interpolation) en una cadena: `"{$n + 1} ..."`.

{% include nav.html %}