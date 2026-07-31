---
title: gather y take
translations_gpt:
---

{% include menu.html %}

Un bloque `gather` recoge valores. En cualquier lugar dentro de él — incluidos los bucles y las subrutinas que llame —, un `take` añade un valor a la lista que produce `gather`:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

El `take` se ejecuta una vez por cada número `1, 2, 3`, aportando `1`, `4` y `9`. El bloque `gather` entero evalúa a la lista de todo lo tomado.

`take` puede aparecer bajo cualquier estructura de control, lo que hace de `gather` una herramienta ideal para construir una lista con condiciones:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Aquí solo se toma un valor cuando el `if` se cumple, así que en la lista acaban solo los números pares. Esto suele ser más claro que construir la lista a mano con `push`, porque la lógica se lee como un bucle normal y `take` simplemente marca los valores que hay que conservar.

{% include nav.html %}
