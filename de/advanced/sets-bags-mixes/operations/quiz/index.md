---
title: Quiz — Sets
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Die Vereinigung sammelt jeden Wert aus beiden Sets, aber ein Set speichert jeden Wert nur einmal. Die beiden Sets teilen `2`, daher ist die Vereinigung `{1, 2, 3}` — drei verschiedene Elemente.

</div>

{% include nav.html %}
