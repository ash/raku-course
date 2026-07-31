---
title: Quiz — Aserciones
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

El lookbehind positivo `<?after '='>` exige un `=` inmediatamente antes de la posición actual, y después `\d+` empareja los dígitos. El `=` se comprueba pero no se consume, así que la coincidencia es solo `｢5｣`.

</div>

{% include nav.html %}
