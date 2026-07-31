---
title: Quiz — whenever
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

El cuerpo del `whenever` se ejecuta para cada valor, añadiendo su doble. El supply emite `1, 2, 3`, así que `@out` recoge `2, 4, 6`.

</div>

{% include nav.html %}
