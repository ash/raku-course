---
title: Quiz — Cuantificadores
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

El cuantificador `** 2..3` admite dos o tres repeticiones y, al ser voraz, toma todas las que puede: tres. La cuarta `a` se queda fuera de la coincidencia.

</div>

{% include nav.html %}
