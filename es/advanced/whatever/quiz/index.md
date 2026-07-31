---
title: Quiz — La estrella Whatever
---

{% include menu.html %}

¿Que imprime el siguiente programa?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

En un subíndice, la estrella `*` sola representa el numero de elementos — aquí `5`. Entonces `*-2` es el índice `3`, y el elemento en el índice `3` (contando desde cero) es `8`.

</div>

{% include nav.html %}
