---
title: Quiz — Cuantificadores básicos
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? Fíjate en el cuantificador `*` sobre la `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` significa «cero o más», así que `a*` se conforma con no emparejar ninguna `a`. En `br` no hay ninguna `a` entre la `b` y la `r`, pero el patrón coincide igualmente porque se admiten cero repeticiones, dando `｢br｣`.

</div>

{% include nav.html %}
