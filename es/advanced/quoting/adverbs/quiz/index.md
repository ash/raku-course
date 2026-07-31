---
title: Quiz — Adverbios de entrecomillado
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` normalmente interpola escalares, pero un adverbio escrito con `!` *desactiva* una característica. Aquí `:!s` deshabilita la interpolación escalar, así que `$price` queda exactamente como está escrito en lugar de ser reemplazado por `5`.

</div>

{% include nav.html %}
