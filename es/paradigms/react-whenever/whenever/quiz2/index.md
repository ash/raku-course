---
title: Quiz — whenever y done
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

El primer `whenever` añade `1`, después `2`, y con el `2` llama a `done`. El punto crucial es que `done` termina el **bloque `react` entero**, no solo su propio `whenever`: el resto del primer supply (`3`) y el *segundo supply completo* (`10, 20`) quedan cortados antes de entregarse. Así que `@out` contiene solo `[1 2]`. Si `done` silenciara únicamente su propio flujo, habrías visto `[1 2 10 20]`, pero un solo `done` detiene todas las reacciones a la vez.

</div>

{% include nav.html %}
