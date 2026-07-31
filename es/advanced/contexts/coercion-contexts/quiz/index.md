---
title: Quiz — Contextos
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

El prefijo `+` fuerza el contexto numérico. Para un array, el valor numérico es su número de elementos, así que `+@a` es `3`, no la suma. Usa `~` para el contexto de cadena (`10 20 30`) o `[+]` para sumar realmente los elementos.

</div>

{% include nav.html %}
