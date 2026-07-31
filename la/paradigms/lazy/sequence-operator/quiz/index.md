---
title: Quiz — Operator sequentiae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

Ex `3, 6` operator gradum `+3` colligit et pergit donec finem `15` attingat: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
