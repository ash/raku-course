---
title: Quiz — Valores de enum
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` devuelve el número detrás de una constante, pero `.key` devuelve su *nombre* como cadena de texto. Así que `Tue.key` es `Tue`, independientemente del número `2` que se le asignó.

</div>

{% include nav.html %}
