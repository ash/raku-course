---
title: Quiz — react
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

El cuerpo del `whenever` recoge cada valor, pero llama a `done` en cuanto ve el `3`. `done` cierra el bloque `react`, así que el supply se abandona y `4` y `5` no se procesan nunca, dejando `[1 2 3]`.

</div>

{% include nav.html %}
