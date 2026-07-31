---
title: Quiz — await
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` espera a que la única promesa termine y devuelve su resultado. El bloque calcula `8 * 8`, así que `await $p` es `64`.

</div>

{% include nav.html %}
