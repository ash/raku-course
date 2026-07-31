---
title: Quiz — Parámetros slurpy
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Los parámetros fijos se llenan antes que el slurpy. `$first` toma `'a'`, y solo los dos argumentos restantes `'b'` y `'c'` van a `@rest`, por lo que su `.elems` es `2`.

</div>

{% include nav.html %}
