---
title: Quiz — Assertiones
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Respectus positivus `<?after '='>` postulat `=` statim ante locum currentem, deinde `\d+` cifras congruit. `=` inspicitur sed non consumitur, itaque congruentia est sola `｢5｣`.

</div>

{% include nav.html %}
