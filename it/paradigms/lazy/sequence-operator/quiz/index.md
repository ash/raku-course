---
title: "Quiz — L'operatore di sequenza"
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Da `3, 6` l'operatore deduce un passo di `+3` e continua finché non raggiunge l'estremo `15`: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
