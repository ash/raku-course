---
title: 'Solution: ¡Hola, Mundo!'
---

{% include menu.html %}

Después de un largo recorrido a través del curso, tuvimos que volver a este programa nuevamente, ya que acabamos de aprender la nueva forma de escribir programas en Raku.

## Código 1

```raku
sub MAIN() {
    say '¡Hola, Mundo!';
}
```

🦋 Encuentra el programa en el archivo [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/hello-world.raku).

## Código 2

```raku
unit sub MAIN;
say '¡Hola, Mundo!';
```

🦋 Encuentra el programa en el archivo [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/hello-world-unit.raku).

## Ejemplo

Ejecuta cualquiera de los programas:

```console
$ raku exercises/the-main-function/hello-world.raku
¡Hola, Mundo!

$ raku exercises/the-main-function/hello-world-unit.raku
¡Hola, Mundo!
```

{% include nav.html %}