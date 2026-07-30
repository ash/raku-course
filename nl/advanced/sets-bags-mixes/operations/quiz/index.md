---
title: Quiz — Sets
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De vereniging verzamelt elke waarde uit beide sets, maar een set bewaart elke waarde slechts een keer. De twee sets delen `2`, dus de vereniging is `{1, 2, 3}` — drie unieke elementen.

</div>

{% include nav.html %}
