---
title: Viktorīna — Datumu aritmētika
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say Date.new(2026, 1, 28) + 5;
```

{:.quiz}
1 | 2026-02-02
0 | 2026-01-33
0 | 2026-02-05
0 | 2026-02-03

{% include quiz.html %}

<div class="extended-explanation">

Pieskaitot veselu skaitli, datums tiek pavirzīts uz priekšu par tik dienām, automātiski pārritot nākamajā mēnesī. Piecas dienas pēc 2026. gada 28. janvāra nokrīt uz 2. februāri — janvāra atlikušās trīs dienas (29., 30., 31.) plus vēl divas.

</div>

{% include nav.html %}
