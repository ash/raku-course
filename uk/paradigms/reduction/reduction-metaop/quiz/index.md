---
title: 'Тест — Метаоператор згортки'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` згортає список оператором `min`, порівнюючи елементи попарно й лишаючи найменший. Найменше з `8, 3, 5, 1` — це `1`.

</div>

{% include nav.html %}
