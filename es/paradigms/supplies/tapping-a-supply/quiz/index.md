---
title: Quiz — Supplies
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

El enganche se ejecuta una vez por cada valor que el supply emite. Cada vez pasa el valor a mayúsculas y lo añade a `$out`, así que `a`, `b`, `c` se convierten en `A`, `B`, `C`, unidos en `ABC`. El bloque reacciona al flujo entero, no solo al último valor, y por eso la respuesta no es simplemente `C`.

</div>

{% include nav.html %}
