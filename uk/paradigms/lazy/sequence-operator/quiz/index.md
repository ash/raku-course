---
title: 'Тест — Оператор послідовності'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

З `3, 6` оператор виснує крок `+3` і продовжує, аж поки не дійде до кінцевої точки `15`: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
