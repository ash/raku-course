---
title: 'Solución: Eco hasta suficiente'
---

{% include menu.html %}

Este programa requiere un bucle que se detiene cuando el usuario ingresa una palabra predefinida.

## Código

Hay varias formas similares de resolver la tarea con `while`, `until` o `repeat`. Una de ellas se muestra a continuación.

```raku
my $word;
repeat {
    $word = prompt 'Tu palabra: ';
    say $word;
} while $word ne 'suficiente';

say 'OK, terminado.';
```

🦋 Encuentra el programa en el archivo [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/echo-until-enough.raku).

## Salida

Ejecuta el programa, ingresa algunas palabras diferentes y luego termina el bucle.

```console
$ raku exercises/loops/echo-until-enough.raku
Tu palabra: esto
esto
Tu palabra: es
es
Tu palabra: mi
mi
Tu palabra: palabra
palabra
Tu palabra: suficiente
suficiente
OK, terminado.
```

## Comentario

Nota que declaras la variable `$word` _antes_ del bucle, ya que la prueba `while` está ubicada fuera del alcance del cuerpo del bucle. Si la variable se define dentro del bucle, no será visible en la prueba.

{% include nav.html %}