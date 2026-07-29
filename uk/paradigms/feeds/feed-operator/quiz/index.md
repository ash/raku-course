---
title: 'Тест — Оператор потоку'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

Потік надсилає `1..6` у `grep(* > 3)`, який залишає `4, 5, 6` і зберігає їх у `@big`. Тож `@big.elems` дорівнює `3`.

</div>

{% include nav.html %}
