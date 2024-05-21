---
title: 'Solución: El valor de e'
---

{% include menu.html %}

## Descargo de responsabilidad

En Raku, hay una constante incorporada `e` que da la respuesta inmediata a la tarea. La solución que se muestra a continuación está diseñada con fines educativos.

## Código

La fórmula en esta tarea contiene un factorial, y ya tenemos al menos dos soluciones para calcularlo (más por venir). El programa a continuación define dos funciones: una para calcular el factorial, y otra para la suma parcial según la fórmula.

Como se requiere que la función pueda ser llamada sin argumentos, en cuyo caso ejecuta un número predefinido de iteraciones, podemos agregar un [valor predeterminado](/es/essentials/functions/default-values) al parámetro: `sub e-approx($max = 100)`.

En el código, observe las similitudes en cómo se acumulan los valores de resultado en un [bucle `for` postfijo](/es/essentials/loops/postfix-for) sobre un [rango](/es/essentials/ranges).

Aquí está la solución:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Encuentra el programa en el archivo [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/the-value-of-e.raku).

## Salida

Con 10 y 100 iteraciones, obtenemos los siguientes resultados. Además, prueba otros valores de `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}