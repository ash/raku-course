---
title: 'Quiz — Operator `...`'
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

Cum *tribus* valoribus initialibus, `...` rationem inter eos spectat: `1, 3, 9` unusquisque triplicatur, itaque geometrice ut `27, 81` pergit. (Duo valores initiales gradum arithmeticum potius constituerent.)

</div>

{% include nav.html %}
