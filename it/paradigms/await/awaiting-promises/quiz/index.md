---
title: Quiz — await
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` aspetta che l'unica promise finisca e ne restituisce il risultato. Il blocco calcola `8 * 8`, quindi `await $p` è `64`.

</div>

{% include nav.html %}
