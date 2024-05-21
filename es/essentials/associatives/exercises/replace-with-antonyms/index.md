---
title: 'Ejercicio: Reemplazar con antónimos'
---

{% include menu.html %}

## Problema

Crea un programa que reemplace todas las palabras de la línea de comandos con sus antónimos. Si la palabra no está en el diccionario, no la modifiques y imprímela tal cual.

Usa un hash codificado para mantener el diccionario de antónimos. Para tu conveniencia, aquí hay una lista preparada de aproximadamente 200 pares que puedes copiar y pegar directamente en tu programa: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Todos los pares se mantienen en ambas direcciones, por ejemplo:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Haz el programa lo más simple posible e imprime las palabras línea por línea.

## Ejemplo

Ejecuta el programa y pasa algunas palabras a él. Asegúrate de que al menos algunas de las palabras se puedan encontrar en el diccionario.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}