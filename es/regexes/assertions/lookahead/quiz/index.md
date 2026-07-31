---
title: Quiz — Lookahead
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

El lookahead positivo `<?before ' cm'>` exige que a los dígitos les siga ` cm`, y así es. La aserción comprueba ese texto pero no lo consume, así que la coincidencia son solo los dígitos, `｢5｣`.

</div>

{% include nav.html %}
