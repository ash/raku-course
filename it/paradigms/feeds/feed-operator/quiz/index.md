---
title: "Quiz — L'operatore feed"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

Il flusso manda `1..6` dentro `grep(* > 3)`, che conserva `4, 5, 6`, e li ripone in `@big`. Quindi `@big.elems` è `3`.

</div>

{% include nav.html %}
