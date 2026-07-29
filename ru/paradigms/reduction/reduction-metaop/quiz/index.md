---
title: 'Тест — Метаоператор свёртки'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`[min]` сворачивает список оператором `min`, попарно сравнивая элементы и оставляя наименьший.
Наименьшее из `8, 3, 5, 1` — это `1`.

</div>

{% include nav.html %}
