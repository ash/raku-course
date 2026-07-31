---
title: Quiz — Combinare le promise
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` restituisce in ordine i risultati delle due promise, `(2, 3)`. Il metaoperatore di riduzione `[*]` li moltiplica, dando `6`.

</div>

{% include nav.html %}
