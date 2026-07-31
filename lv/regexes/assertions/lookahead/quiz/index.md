---
title: Viktorīna — Skatiens uz priekšu
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Pozitīvā lūkošanās uz priekšu `<?before ' cm'>` pieprasa, lai cipariem sekotu ` cm`, un tā arī ir. Apgalvojums šo tekstu pārbauda, bet nepatērē, tāpēc sakritība ir tikai cipari — `｢5｣`.

</div>

{% include nav.html %}
