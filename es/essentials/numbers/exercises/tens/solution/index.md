---
title: 'Solution: Número de decenas'
---

{% include menu.html %}

Así es como puedes resolver la tarea.

## Código

```raku
my $n = prompt 'Introduce un número entero positivo: ';

say ($n % 100) div 10;
```

🦋 Puedes encontrar el código completo en el archivo [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/tens.raku).

## Salida

Ejecuta el programa y prueba algunos casos diferentes:

* Un número redondo de tres dígitos como 120;
* Un múltiplo de 100, por ejemplo, 400;
* Un número que sea mayor que 10 pero menor que 100.
* Un número menor que 10.

Para el número 234, la salida del programa se ve así:

```console
$ raku exercises/numbers/tens.raku
Introduce un número entero positivo: 234
3
```

## Comentarios

En esta solución, se utiliza nuevamente la combinación del módulo `%` y la división entera `div`.

Nota el espacio antes del paréntesis de apertura. Tiene que estar ahí; de lo contrario, obtendrás un error de sintaxis. Volveremos a [este aspecto](/es/essentials/more-on-functions/mind-the-space) de Raku en la sección sobre funciones, pero por ahora, escribe el código tal como se muestra arriba o agrega otro par de paréntesis para rodear el argumento de la función — en este caso, no se necesita espacio:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}