---
title: Quiz — make e made
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Il blocco in linea conserva `$<number>.Int ** 2` sulla corrispondenza. Il token ha catturato `5`; convertirlo nell'intero `5` ed elevarlo al quadrato dà `25`, che `made` restituisce.

</div>

{% include nav.html %}
