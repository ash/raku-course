---
title: Quiz — Set
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say (set(1, 2) ∪ set(2, 3)).elems;
```

{:.quiz}
1 | 3
0 | 4
0 | 2
0 | 1

{% include quiz.html %}

<div class="extended-explanation">

L'unione raccoglie ogni valore da ciascun set, ma un set conserva ogni valore una sola volta. I due set condividono `2`, quindi l'unione è `{1, 2, 3}` — tre elementi distinti.

</div>

{% include nav.html %}
