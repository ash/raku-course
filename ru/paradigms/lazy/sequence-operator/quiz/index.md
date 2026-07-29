---
title: 'Тест — Оператор последовательности'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Из `3, 6` оператор выводит шаг `+3` и продолжает, пока не дойдёт до конечной точки `15`:
`3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
