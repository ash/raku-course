---
title: Solución de ‘Cadenas Verdaderas y Falsas’
---

{% include menu.html %}

Este ejercicio es similar a [el anterior](../../true-false-numbers), pero esta vez, la tarea es un poco más complicada. Hay más cadenas 'sospechosas' que pueden ser tratadas como `False`. Vamos a explorarlas.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

De todas estas, solo la cadena vacía se convierte en `False`. Todas las demás cadenas, incluso aquellas que contienen solo espacios o un carácter explícito `0`, se convierten en `True`.

🦋 Puedes encontrar el programa completo con el ejemplo anterior en el archivo [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-strings.raku).

{% include nav.html %}