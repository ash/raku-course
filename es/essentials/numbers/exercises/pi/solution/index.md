---
title: 'Solution: El valor de π'
---

{% include menu.html %}

El programa para imprimir el valor de π es bastante sencillo.

## Código

```raku
say π;
```

🦋 Puedes encontrar el código completo en el archivo [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/pi.raku).

## Salida

Ejecuta el programa y observa lo que imprime:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Comentarios

Raku nos ofrece una constante incorporada llamada `π`, lo cual hace que el programa sea trivial. No obstante, considera otras opciones para hacer lo mismo:

```raku
    π.say;
```

O:

```raku
    pi.say;
```

O:

```raku
    say pi;
```

{% include nav.html %}