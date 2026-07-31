---
title: Viktorīna — hyper
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` izklaida `map` pa pavedieniem, bet rezultātus patur to sākotnējā secībā, tāpēc tas uzvedas gluži kā parasts `map` — katra elementa kāpināšana kvadrātā dod `(1 4 9 16)`.

</div>

{% include nav.html %}
