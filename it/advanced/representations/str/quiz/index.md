---
title: Quiz — gist e Str
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` restituisce la forma stringa semplice, dove gli elementi sono semplicemente uniti da spazi senza parentesi: `1 2 3`. La forma con parentesi quadre `[1 2 3]` è quella che `.gist` (e quindi `say @a`) produrrebbe.

</div>

{% include nav.html %}
