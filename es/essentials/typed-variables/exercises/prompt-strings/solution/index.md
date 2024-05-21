---
title: Solución de ‘Examinando la salida del prompt — Cadenas’
---

{% include menu.html %}

## Código

Aquí está el programa completo que realiza la tarea e imprime tanto la cadena ingresada como su tipo.

```raku
my $name = prompt '¿Cuál es tu nombre? ';
say $name;
say $name.WHAT;
```

🦋 Puedes encontrar el código fuente en el archivo [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-strings.raku).

## Ejecuciones de prueba

Ejecuta el programa un par de veces e ingresa diferentes nombres. El programa repite la entrada y también informa que la variable contiene una cadena, en otras palabras, un objeto del tipo `Str`.

```console
$ raku exercises/data-types/prompt-strings.raku
¿Cuál es tu nombre? Andrey
Andrey
(Str)
```

Ahora, ejecuta el programa nuevamente, escribe unos pocos espacios en lugar de un nombre y presiona Enter.

```console
$ raku exercises/data-types/prompt-strings.raku
¿Cuál es tu nombre?    

(Str)
```

No vemos la salida, pero vemos que el tipo de la variable sigue siendo `Str`.

{% include nav.html %}