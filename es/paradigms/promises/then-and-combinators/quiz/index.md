---
title: Quiz — Combinar promesas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` devuelve en orden los resultados de las dos promesas, `(2, 3)`. El metaoperador de reducción `[*]` los multiplica, dando `6`.

</div>

{% include nav.html %}
