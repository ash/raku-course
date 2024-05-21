---
title: Solución de 'Convertir la entrada del usuario a un número'
---

{% include menu.html %}

El programa puede ser tan simple como esto:

## Código

```raku
my Int $n = prompt 'Introduce un número: ';
say $n;
```

🦋 Puedes encontrar el código fuente en el archivo [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Ejemplo

Ejecuta el programa e introduce un número entero, ya sea positivo o negativo:

```console
$ raku exercises/typed-variables/input-number.raku
Introduce un número: -42
-42
```

## Comentarios

Como hemos [visto](/es/essentials/typed-variables/allomorphs), el valor de retorno de `prompt` es `IntStr`, que se puede asignar a una variable `Int` sin coerción.

Sin embargo, ten en cuenta que el programa se terminará con una excepción si introduces una cadena que no se puede convertir a un número entero.

{% include nav.html %}