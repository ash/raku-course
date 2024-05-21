---
title: 'Solución: Reemplazar con antónimos'
---

{% include menu.html %}

Para resolver la tarea, el contenido del archivo [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) se copia al archivo de solución [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). Después de eso, un bucle sobre los argumentos de entrada intenta encontrar la palabra en el diccionario, y si puede, toma el antónimo. Si no existe tal palabra en el diccionario, se usa la palabra original.

## Código

La solución se presenta a continuación. El diccionario se muestra solo parcialmente aquí.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Encuentra el programa en el archivo [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Salida

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Comentarios

1. El operador `//` es el [operador definido-o](/es/essentials/scalar-variables/defined-or-operator), que devuelve el primer operando definido.
1. En el hash, todas las claves son palabras (es decir, parecen identificadores), por lo que no es necesario entrecomillarlas en el hash. Es posible crear un hash, como se muestra a continuación:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}