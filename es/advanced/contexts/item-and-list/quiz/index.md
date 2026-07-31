---
title: Quiz — Contexto de ítem
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

El contextualizador `$( … )` fuerza el contexto de elemento, por lo que el array se trata como un solo valor en lugar de una lista de elementos. El bucle `for` por tanto ve un solo elemento y ejecuta su cuerpo una sola vez, dejando `$n` en `1`. Sin `$( )`, el bucle iteraría tres veces.

</div>

{% include nav.html %}
