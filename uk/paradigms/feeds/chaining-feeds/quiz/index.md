---
title: 'Тест — Потоки'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

Потік надсилає список у `map(* + 5)`, який додає п'ять до кожного елемента, і збирає результат у `@r`. Тож `@r` дорівнює `[15 25 35]`.

</div>

{% include nav.html %}
