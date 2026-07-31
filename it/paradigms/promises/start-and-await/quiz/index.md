---
title: Quiz — Promise
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` esegue il blocco in secondo piano e restituisce una promise. `await` la aspetta e restituisce il risultato del blocco, `100 / 4`, cioè `25`.

</div>

{% include nav.html %}
