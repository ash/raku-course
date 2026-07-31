---
title: 'Solution: Imprimir la suma'
---

{% include menu.html %}

Este programa consiste en una única función `MAIN` que toma dos argumentos tipados, ambos construidos a partir de los argumentos de la línea de comandos.

## Código

Aquí está la solución:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Encuentra el programa en el archivo [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/print-the-sum.raku).

## Salida

Prueba diferentes números de entrada:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

También puedes intentar ejecutar el programa sin argumentos o con argumentos de diferentes tipos y ver qué sucede. Hablaremos sobre cómo manejar esos casos en la segunda parte del curso.

{% include nav.html %}