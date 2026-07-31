---
title: Quiz — Smartmatch
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? Fíjate en que esta vez no hay `so` y la coincidencia usa la forma `m/.../`.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` empareja igual que lo haría `/sat/`. Sin `so` que lo convierta en booleano, el emparejamiento inteligente devuelve el propio objeto de coincidencia, que `say` imprime entre esquinas como `｢sat｣`.

</div>

{% include nav.html %}
