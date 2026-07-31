---
title: 'Solution: Un MAIN tipado'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Puedes encontrar el código fuente en el archivo [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Salida

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Comentarios

1. La restricción `Int` significa que la palabra de la línea de comandos debe parecerse a un entero. Dado `5`, se vincula a `$n` y el cuerpo imprime `10`.

1. Dado `abc`, el valor no puede convertirse en un `Int`, por lo que la firma no coincide. Raku no ejecuta el cuerpo — en su lugar imprime el mensaje de uso generado, proporcionándote validación de argumentos sin ninguna verificación manual.

{% include nav.html %}
