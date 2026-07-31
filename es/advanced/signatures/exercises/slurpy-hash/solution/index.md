---
title: 'Solution: Argumentos nominales slurpy'
---

{% include menu.html %}

Aquí está una posible solución a la tarea.

## Código

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Encuentra el programa en el archivo [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Salida

```
Anna: colour=red, size=5
```

## Comentarios

1. El parámetro posicional fijo `$name` se llena primero, y el slurpy `*%opts` reúne cada argumento nombrado restante en un hash.

1. `%opts.sort` ordena los pares por clave, de modo que la salida es determinista: `colour` va antes que `size`. El `.map` convierte cada par en una cadena `key=value` usando `.key` y `.value`, y `.join(', ')` los une.

1. La cadena final interpola `$name` y el `$details` ensamblado, produciendo `Anna: colour=red, size=5`.

{% include nav.html %}
