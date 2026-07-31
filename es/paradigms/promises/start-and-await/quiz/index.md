---
title: Quiz — Promesas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` ejecuta el bloque en segundo plano y devuelve una promesa. `await` la espera y devuelve el resultado del bloque, `100 / 4`, que es `25`.

</div>

{% include nav.html %}
