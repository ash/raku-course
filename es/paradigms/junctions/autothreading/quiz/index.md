---
title: Quiz — Autohilado
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Multiplicar una unión autoenhebra: `* 2` se aplica a cada valor que hay detrás de la unión, produciendo una nueva unión `any` `any(2, 4, 6)`.

</div>

{% include nav.html %}
