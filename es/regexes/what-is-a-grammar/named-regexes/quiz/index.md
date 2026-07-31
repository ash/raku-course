---
title: Quiz — Expresiones regulares con nombre
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Llamar a un regex con nombre como `<letter>` lo empareja y captura el resultado bajo ese nombre. El patrón encuentra la primera letra minúscula, `a`, así que `$<letter>` es `｢a｣`.

</div>

{% include nav.html %}
