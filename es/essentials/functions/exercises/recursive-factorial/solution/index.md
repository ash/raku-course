---
title: 'Solution: Factorial recursivo'
---

{% include menu.html %}

El factorial es un ejercicio muy productivo, ya que se puede resolver de varias formas diferentes. Esta vez estamos usando recursión, lo que significa que la función se llama a sí misma.

## Código 1

Aquí está el código de la solución. Nota que necesitas verificar la condición para detener la recursión, de lo contrario continuará indefinidamente.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Encuentra el programa en el archivo [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Código 2

En los casos, como se muestra en este código, a menudo es mejor usar formas postfijas de `if` para retornar inmediatamente de la función. Este enfoque aclara el código y elimina mucha indentación y puntuación.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Encuentra el programa actualizado en el archivo [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Ejemplo

Ejecuta el programa y verifica el resultado. Por cierto, ¿sabías que _10!_ es el número exacto de segundos en seis semanas?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}