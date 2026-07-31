---
title: 'Solution: Imprimir la advertencia'
---

{% include menu.html %}

## Código

Aquí está la solución:

```raku
my $age = prompt '¿Cuál es tu edad? ';

if $age < 0 {
    note '¡Ingresaste un número negativo!';
}
else {
    say "Tu edad es $age";
}
```

🦋 Encuentra el programa en el archivo [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/print-the-warning.raku).

## Salida

Un par de casos posibles:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
¿Cuál es tu edad? 20
Tu edad es 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
¿Cuál es tu edad? -1
¡Ingresaste un número negativo!
```

Para asegurarte de que el mensaje de error se imprima en `STDERR`, redirige la salida. El mensaje para ingresar la edad no aparecerá, pero aún puedes ingresar un número. La advertencia sigue siendo visible.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
¡Ingresaste un número negativo!
```

{% include nav.html %}