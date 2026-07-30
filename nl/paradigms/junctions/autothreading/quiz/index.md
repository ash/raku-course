---
title: 'Quiz — Autothreading'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Een junctie vermenigvuldigen doet aan autothreading: `* 2` wordt op elke waarde achter de junctie toegepast, wat een nieuwe `any`-junctie `any(2, 4, 6)` oplevert.

</div>

{% include nav.html %}
