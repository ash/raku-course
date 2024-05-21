---
title: 'Solución: Semáforos'
---

{% include menu.html %}

La idea de la solución es 'circular el índice' del array con los cuatro estados de los semáforos:

```raku
my @lights = <yellow red yellow green>;
```

Durante los primeros segundos, el número de segundos desde el inicio se puede usar directamente como un índice en el array. Cuando excede 3, puedes circularlo al comienzo del array con el operador módulo `%`. La longitud del array es `@lights.elems`, pero cuando se usa como un operando de `%`, no es necesario llamar al método `elems`, ya que el nombre del array se convertirá en un número, y esa conversión está diseñada para devolver el número de elementos.

## Código

Aquí está la solución:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Encuentra el programa en el archivo [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/traffic-lights.raku).

## Salida

Ejecuta el programa. Además, prueba otros valores en el programa.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}